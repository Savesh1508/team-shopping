"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const sequelize_1 = require("@nestjs/sequelize");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
const uuid_1 = require("uuid");
const sequelize_2 = require("sequelize");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const otp_model_1 = require("../otp/model/otp.model");
const crypto_1 = require("../helpers/crypto");
const addMinutes_1 = require("../helpers/addMinutes");
const sms_service_1 = require("../sms/sms.service");
let UserService = class UserService {
    constructor(userRepo, jwtService, otpRepo, smsService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.otpRepo = otpRepo;
        this.smsService = smsService;
    }
    async getTokens(user) {
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
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userData) {
            throw new common_1.ForbiddenException('User not found');
        }
        const updatedUser = await this.userRepo.update({ hashed_refresh_token: null }, { where: { id: userData.id }, returning: true });
        res.clearCookie('refresh_token');
        const response = {
            message: 'User logged out successfully',
            user: updatedUser[1][0],
        };
        return response;
    }
    async search(findUserDto) {
        const where = {};
        if (findUserDto.full_name) {
            where['full_name'] = {
                [sequelize_2.Op.like]: `%${findUserDto.full_name}%`,
            };
        }
        if (findUserDto.phone) {
            where['phone'] = {
                [sequelize_2.Op.like]: `%${findUserDto.phone}%`,
            };
        }
        const users = await user_model_1.User.findAll({ where });
        if (!users) {
            throw new common_2.BadRequestException('user not found');
        }
        return users;
    }
    async refreshToken(user_id, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (user_id != decodedToken['id']) {
            throw new common_2.BadRequestException('user not found');
        }
        const user = await this.userRepo.findOne({ where: { id: user_id } });
        if (!user || !user.hashed_refresh_token) {
            throw new common_2.BadRequestException('user not found');
        }
        const tokentMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
        if (!tokentMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updatedUser = await this.userRepo.update({ hashed_refresh_token: hashed_refresh_token }, { where: { id: user.id }, returning: true });
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
    async newOTP(createUserDto, res) {
        const phone = createUserDto.phone;
        const newUser = await this.userRepo.create(createUserDto);
        const otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        const resp = await this.smsService.sendSms(phone.slice(1), otp);
        if (resp.status !== 200)
            throw new common_1.ServiceUnavailableException("Otp jo'natilmadi");
        const message = 'Code has been send to *****' + phone.slice(phone.length - 4);
        const now = new Date();
        const expiration_time = (0, addMinutes_1.AddMinutesToDate)(now, 5);
        await this.otpRepo.destroy({
            where: { phone: 'phone' },
        });
        const newOtp = await this.otpRepo.create({
            id: (0, uuid_1.v4)(),
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
        const token = await this.getTokens(newUser);
        const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
        await this.userRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: newUser.id }, returning: true });
        res.cookie('refresh_token', token.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 100,
            httpOnly: true,
        });
        const encoded = await (0, crypto_1.encode)(JSON.stringify(details));
        return { status: 'Success', Details: encoded, message };
    }
    async verifyOtp(verifyOtpDto) {
        const { verification_key, otp, phone } = verifyOtpDto;
        const currentdate = new Date();
        const decoded = await (0, crypto_1.decode)(verification_key);
        const details = JSON.parse(decoded);
        if (details.phone != phone) {
            throw new common_2.BadRequestException('OTP bu raqamga yuborilmagan');
        }
        const result = await this.otpRepo.findOne({
            where: { id: details.otp_id },
        });
        if (result != null) {
            if (!result.verified) {
                if (crypto_1.dates.compare(result.expiration_time, currentdate)) {
                    if (otp === result.otp) {
                        const user = await this.userRepo.findOne({
                            where: { phone: phone },
                        });
                        if (user) {
                            const updatedUser = await this.userRepo.update({ phone: phone }, { where: { id: user.id }, returning: true });
                            await this.otpRepo.update({ verified: true }, { where: { id: details.otp_id } });
                            const response = {
                                user: updatedUser[1][0],
                            };
                            return response;
                        }
                        else {
                            throw new common_2.BadRequestException("Bunday foydalanuvchi yo'q");
                        }
                    }
                    else {
                        throw new common_2.BadRequestException('OTP is not match');
                    }
                }
                else {
                    throw new common_2.BadRequestException('OTP expired');
                }
            }
            else {
                throw new common_2.BadRequestException('OTP already used');
            }
        }
        else {
            throw new common_2.BadRequestException("Bunday OTP yo'q");
        }
    }
    async updateUser(id, updateUserDto) {
        const user = await this.userRepo.update(updateUserDto, {
            where: { id },
            returning: true,
        });
        if (!user) {
            throw new common_2.BadRequestException('User not found');
        }
        return user;
    }
    async findAll() {
        return this.userRepo.findAll();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __param(2, (0, sequelize_1.InjectModel)(otp_model_1.Otp)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService, Object, sms_service_1.SmsService])
], UserService);
//# sourceMappingURL=user.service.js.map