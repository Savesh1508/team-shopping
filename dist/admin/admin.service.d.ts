import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminYourselfDto } from './dto/update-admin-yourself.dto';
import { SelectDto } from './dto/select_limit.dto';
export declare class AdminService {
    private readonly adminRepo;
    private readonly jwtService;
    constructor(adminRepo: typeof Admin, jwtService: JwtService);
    getTokens(admin: Admin): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    registration(createAdminDto: CreateAdminDto, res: Response): Promise<{
        status: number;
        message: string;
        user: Admin;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginadminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        user: Admin;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: Admin;
    }>;
    limit_admin(selectDto: SelectDto): Promise<Object>;
    SearchAdmin({ name, last_name, email }: {
        name: any;
        last_name: any;
        email: any;
    }): Promise<Admin[]>;
    updateYourself(id: number, updateAdminYourselfDto: UpdateAdminYourselfDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    updateByAdmin(id: number, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    refreshToken(admin_id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: Admin;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findByAdmin(id: number): Promise<Admin>;
    findAllAdmin(): Promise<Admin[]>;
    findByYourself(id: number): Promise<Admin>;
    removeByAdmin(id: number): Promise<{
        removeAdmin: number;
        status: number;
    }>;
}
