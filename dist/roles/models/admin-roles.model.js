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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const role_model_1 = require("./role.model");
const swagger_1 = require("@nestjs/swagger");
const admin_model_1 = require("../../admin/models/admin.model");
let AdminRoles = class AdminRoles extends sequelize_typescript_1.Model {
};
exports.AdminRoles = AdminRoles;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique Id' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], AdminRoles.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Admin Id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => admin_model_1.Admin),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AdminRoles.prototype, "adminId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Role Id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => role_model_1.Role),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AdminRoles.prototype, "roleId", void 0);
exports.AdminRoles = AdminRoles = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'admin_roles', createdAt: false, updatedAt: false })
], AdminRoles);
//# sourceMappingURL=admin-roles.model.js.map