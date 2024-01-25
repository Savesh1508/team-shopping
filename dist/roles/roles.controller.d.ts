import { RoleService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.model';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRoleById(value: string): Promise<Role>;
}
