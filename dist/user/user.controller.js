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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_model_1 = require("./models/user.model");
const verify_otp_dto_1 = require("./dto/verify-otp.dto");
const cookieGetter_decorator_1 = require("../decorators/cookieGetter.decorator");
const admin_guard_1 = require("../guards/admin.guard");
const selfClient_guard_1 = require("../guards/selfClient.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    newOtp(createUserDto, res) {
        return this.userService.newOTP(createUserDto, res);
    }
    verifyOtp(verifyOtpDto) {
        return this.userService.verifyOtp(verifyOtpDto);
    }
    refresh(id, refreshToken, res) {
        return this.userService.refreshToken(+id, refreshToken, res);
    }
    search(full_name, phone) {
        return this.userService.search({ full_name, phone });
    }
    logout(refreshToken, res) {
        return this.userService.logout(refreshToken, res);
    }
    updateUser(id, updateUserDto) {
        return this.userService.updateUser(+id, updateUserDto);
    }
    async findAll() {
        return this.userService.findAll();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('otp'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "newOtp", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_otp_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "verifyOtp", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'refresh user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [user_model_1.User] }),
    (0, common_1.Post)(':id/refresh'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search user' }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('full_name')),
    __param(1, (0, common_1.Query)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Logout User' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_model_1.User }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('signout'),
    __param(0, (0, cookieGetter_decorator_1.CookieGetter)('refresh_token')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update user self' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: user_model_1.User }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all User' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of User',
        type: [user_model_1.User],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map