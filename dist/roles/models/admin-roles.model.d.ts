import { Model } from 'sequelize-typescript';
export declare class AdminRoles extends Model<AdminRoles> {
    id: number;
    adminId: number;
    roleId: number;
}
