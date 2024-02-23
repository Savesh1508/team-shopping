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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_model_1 = require("./models/admin.model");
const login_admin_dto_1 = require("./dto/login-admin.dto");
const sequelize_1 = require("sequelize");
const admin_guard_1 = require("../guards/admin.guard");
const cookieGetter_decorator_1 = require("../decorators/cookieGetter.decorator");
const superAdmin_guard_1 = require("../guards/superAdmin.guard");
const selfAdmin_guard_1 = require("../guards/selfAdmin.guard");
const select_limit_dto_1 = require("./dto/select_limit.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    registration(createUserDto, res) {
        return this.adminService.registration(createUserDto, res);
    }
    login(loginAdminDto, res) {
        return this.adminService.login(loginAdminDto, res);
    }
    select_limit_admin(selectDto) {
        return this.adminService.limit_admin(selectDto);
    }
    logout(refreshToken, res) {
        return this.adminService.logout(refreshToken, res);
    }
    findAll() {
        return this.adminService.findAllAdmin();
    }
    findAllFilter(name, last_name, email) {
        return this.adminService.SearchAdmin({ name, last_name, email });
    }
    refresh(id, refreshToken, res) {
        return this.adminService.refreshToken(+id, refreshToken, res);
    }
    update(id, updateAdminDto) {
        return this.adminService.updateYourself(+id, updateAdminDto);
    }
    updateAdmin(id, updateAdminDto) {
        return this.adminService.updateByAdmin(+id, updateAdminDto);
    }
    getYourself(id) {
        return this.adminService.findByYourself(+id);
    }
    findOne(id) {
        return this.adminService.findByAdmin(+id);
    }
    remove(id) {
        return this.adminService.removeByAdmin(+id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register Admin' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "registration", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Login Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_admin_dto_1.LoginAdminDto, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find limited admins' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [admin_model_1.Admin] }),
    (0, common_1.Post)('limit/admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_limit_dto_1.SelectDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "select_limit_admin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Logout Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('signout'),
    __param(0, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'All Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.UseGuards)(superAdmin_guard_1.SuperAdminGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(superAdmin_guard_1.SuperAdminGuard),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('last_name')),
    __param(2, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAllFilter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'RefreshToken Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)(':id/refresh'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update by id yourself' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(selfAdmin_guard_1.selfAdminGuard),
    (0, common_1.Put)('yourself/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update by id by Admin' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(superAdmin_guard_1.SuperAdminGuard),
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get by id yourself' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(selfAdmin_guard_1.selfAdminGuard),
    (0, common_1.Get)('yourself/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getYourself", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'find One by Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: admin_model_1.Admin }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(superAdmin_guard_1.SuperAdminGuard),
    (0, common_1.Get)(':id/findOne'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete by id by Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: sequelize_1.NUMBER }),
    (0, common_1.UseGuards)(superAdmin_guard_1.SuperAdminGuard),
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map