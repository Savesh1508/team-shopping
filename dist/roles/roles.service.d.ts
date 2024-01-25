import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.model';
export declare class RoleService {
    private roleRepo;
    constructor(roleRepo: typeof Role);
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleByValue(value: string): Promise<Role>;
}
