import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    newOtp(createUserDto: CreateUserDto, res: Response): Promise<{
        status: string;
        Details: string;
        message: string;
    }>;
    verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        user: User;
    }>;
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    search(full_name: string, phone: string): Promise<User[]>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<[affectedCount: number, affectedRows: User[]]>;
    findAll(): Promise<User[]>;
}
