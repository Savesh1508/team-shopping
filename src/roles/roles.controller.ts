import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { RoleService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, description: 'New role', type: [Role] })
  @Post('create')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    const role = await this.roleService.createRole(createRoleDto);
    return role;
  }

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'All roles', type: [Role] })
  @Get('all')
  async getAllRoles(): Promise<Role[]> {
    const roles = await this.roleService.getAllRoles();
    return roles;
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, description: 'Role by value', type: [Role] })
  @Get(':value')
  async getRoleById(@Param('value') value: string) {
    const role = await this.roleService.getRoleByValue(value);
    return role;
  }
}
