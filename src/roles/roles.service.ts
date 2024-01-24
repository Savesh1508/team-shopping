import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const createRole = await this.roleRepo.create(createRoleDto);
    return createRole;
  }

  async getAllRoles(): Promise<Role[]> {
    const roles = await this.roleRepo.findAll({ include: { all: true } });
    return roles;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepo.findOne({ where: { value } });
    return role;
  }
}
