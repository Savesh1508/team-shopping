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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const role_model_1 = require("./models/role.model");
let RoleService = class RoleService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async createRole(createRoleDto) {
        const createRole = await this.roleRepo.create(createRoleDto);
        return createRole;
    }
    async getAllRoles() {
        const roles = await this.roleRepo.findAll({ include: { all: true } });
        return roles;
    }
    async getRoleByValue(value) {
        const role = await this.roleRepo.findOne({ where: { value } });
        return role;
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(role_model_1.Role)),
    __metadata("design:paramtypes", [Object])
], RoleService);
//# sourceMappingURL=roles.service.js.map