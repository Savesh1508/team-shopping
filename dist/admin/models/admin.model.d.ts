import { Model } from 'sequelize-typescript';
interface AdminAttrs {
    last_name: string;
    first_name: string;
    phone: string;
    address: string;
    password: string;
    email: string;
    is_active: boolean;
    hashed_refresh_token: string;
    is_superAdmin: boolean;
}
export declare class Admin extends Model<Admin, AdminAttrs> {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    is_superAdmin: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
}
export {};
