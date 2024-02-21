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
exports.UserAddressController = void 0;
const userAddress_model_1 = require("./models/userAddress.model");
const common_1 = require("@nestjs/common");
const userAddress_service_1 = require("./userAddress.service");
const create_userAddress_dto_1 = require("./dto/create-userAddress.dto");
const swagger_1 = require("@nestjs/swagger");
const update_userAddress_dto_1 = require("./dto/update-userAddress.dto");
let UserAddressController = class UserAddressController {
    constructor(userAddressService) {
        this.userAddressService = userAddressService;
    }
    async create(createUserAddressDto) {
        return this.userAddressService.create(createUserAddressDto);
    }
    async findAll() {
        return this.userAddressService.findAll();
    }
    async findOne(id) {
        return this.userAddressService.findOne(id);
    }
    async update(id, updateUserAddressDto) {
        return this.userAddressService.update(id, updateUserAddressDto);
    }
    async delete(id) {
        return this.userAddressService.delete(id);
    }
};
exports.UserAddressController = UserAddressController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add comment' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'New  UserAddress',
        type: [userAddress_model_1.UserAddress],
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_userAddress_dto_1.CreateUserAddressDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all UserAddress' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of UserAddress',
        type: [userAddress_model_1.UserAddress],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach UserAddress' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'UserAddress by Id',
        type: [userAddress_model_1.UserAddress],
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update UserAddress' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated UserAddress',
        type: [userAddress_model_1.UserAddress],
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_userAddress_dto_1.UpdateuserAddressDto]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete UserAddress' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted UserAddress',
        type: [userAddress_model_1.UserAddress],
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserAddressController.prototype, "delete", null);
exports.UserAddressController = UserAddressController = __decorate([
    (0, swagger_1.ApiTags)('UserAddress'),
    (0, common_1.Controller)('userAddress'),
    __metadata("design:paramtypes", [userAddress_service_1.UserAddressService])
], UserAddressController);
//# sourceMappingURL=userAddress.controller.js.map