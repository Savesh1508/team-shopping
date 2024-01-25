import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    registration(createUserDto: CreateAdminDto, res: Response): Promise<{
        message: string;
        user: Admin;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
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
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        user: Admin;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findAll(): Promise<Admin[]>;
    findAllFilter(name: string, last_name: string, email: string): Promise<Admin[]>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    updateAdmin(id: string, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    findOne(id: string): Promise<Admin>;
    remove(id: string): Promise<number>;
}
