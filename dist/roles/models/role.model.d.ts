import { Model } from 'sequelize-typescript';
import { Admin } from 'src/admin/models/admin.model';
interface RoleCreationAttributes {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttributes> {
    id: number;
    value: string;
    z: any;
    description: string;
    admins: Admin[];
}
export {};
