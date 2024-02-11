import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { FindUserDto } from './dto/find-user.dto';
import { Otp } from '../otp/model/otp.model';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { SmsService } from '../sms/sms.service';
export declare class UserService {
    private readonly userRepo;
    private readonly jwtService;
    private readonly otpRepo;
    private readonly smsService;
    constructor(userRepo: typeof User, jwtService: JwtService, otpRepo: typeof Otp, smsService: SmsService);
    getTokens(user: User): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
    }>;
    search(findUserDto: FindUserDto): Promise<User[]>;
    refreshToken(user_id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    newOTP(createUserDto: CreateUserDto, res: Response): Promise<{
        status: string;
        Details: string;
        message: string;
    }>;
    verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        user: User;
    }>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<[affectedCount: number, affectedRows: User[]]>;
    findAll(): Promise<User[]>;
}
