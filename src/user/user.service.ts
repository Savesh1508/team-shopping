import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { BadRequestException } from '@nestjs/common';
import { v4 } from 'uuid';
import { FindUserDto } from './dto/find-user.dto';
import { Op } from 'sequelize';
import * as otpGenerator from 'otp-generator';
import * as bcrypt from 'bcrypt';
import { Otp } from '../otp/model/otp.model';
import { dates, decode, encode } from '../helpers/crypto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { SmsService } from '../sms/sms.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,

    @InjectModel(Otp) private readonly otpRepo: typeof Otp,
    private readonly smsService: SmsService,
  ) {}

  async getTokens(user: User) {
    const jwtPayload = {
      id: user.id,
      is_active: user.is_active,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!userData) {
      throw new ForbiddenException('User not found');
    }
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out successfully',
      user: updatedUser[1][0],
    };
    return response;
  }

  async search(findUserDto: FindUserDto) {
    const where = {};
    if (findUserDto.full_name) {
      where['full_name'] = {
        [Op.like]: `%${findUserDto.full_name}%`,
      };
    }
    if (findUserDto.phone) {
      where['phone'] = {
        [Op.like]: `%${findUserDto.phone}%`,
      };
    }
    const users = await User.findAll({ where });
    if (!users) {
      throw new BadRequestException('user not found');
    }
    return users;
  }

  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (user_id != decodedToken['id']) {
      throw new BadRequestException('user not found');
    }
    const user = await this.userRepo.findOne({ where: { id: user_id } });
    if (!user || !user.hashed_refresh_token) {
      throw new BadRequestException('user not found');
    }
    const tokentMatch = await bcrypt.compare(
      refreshToken,
      user.hashed_refresh_token,
    );
    if (!tokentMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const tokens = await this.getTokens(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'User refreshed',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }

  async newOTP(createUserDto: CreateUserDto) {
    const phone = createUserDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const resp = await this.smsService.sendSms(phone.slice(1), otp);
    if (resp.status !== 200)
      throw new ServiceUnavailableException("Otp jo'natilmadi");
    const message =
      'Code has been send to *****' + phone.slice(phone.length - 4);

    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({
      where: { phone: 'phone' },
    });

    const newOtp = await this.otpRepo.create({
      id: v4(),
      otp,
      expiration_time,
      phone: phone,
    });
    const details = {
      timestamp: now,
      phone: phone,
      success: true,
      message: 'OTP sent to user',
      otp_id: newOtp.id,
    };

    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded, message };
  }
  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, phone } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const details = JSON.parse(decoded);
    if (details.phone != phone) {
      throw new BadRequestException('OTP bu raqamga yuborilmagan');
    }
    const result = await this.otpRepo.findOne({
      where: { id: details.otp_id },
    });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const user = await this.userRepo.findOne({
              where: { phone: phone },
            });
            if (user) {
              const updatedUser = await this.userRepo.update(
                { phone: phone },
                { where: { id: user.id }, returning: true },
              );
              await this.otpRepo.update(
                { verified: true },
                { where: { id: details.otp_id } },
              );
              const response = {
                user: updatedUser[1][0],
              };
              return response;
            } else {
              throw new BadRequestException("Bunday foydalanuvchi yo'q");
            }
          } else {
            throw new BadRequestException('OTP is not match');
          }
        } else {
          throw new BadRequestException('OTP expired');
        }
      } else {
        throw new BadRequestException('OTP already used');
      }
    } else {
      throw new BadRequestException("Bunday OTP yo'q");
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }
}
