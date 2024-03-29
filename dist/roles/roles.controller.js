"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const role_model_1 = require("./models/role.model");
const swagger_1 = require("@nestjs/swagger");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(createRoleDto) {
        const role = await this.roleService.createRole(createRoleDto);
        return role;
    }
    async getAllRoles() {
        const roles = await this.roleService.getAllRoles();
        return roles;
    }
    async getRoleById(value) {
        const role = await this.roleService.getRoleByValue(value);
        return role;
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create role' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New role', type: [role_model_1.Role] }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'All roles', type: [role_model_1.Role] }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAllRoles", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get role by value' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Role by value', type: [role_model_1.Role] }),
    (0, common_1.Get)(':value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoleById", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RoleService])
], RoleController);
//# sourceMappingURL=roles.controller.js.map