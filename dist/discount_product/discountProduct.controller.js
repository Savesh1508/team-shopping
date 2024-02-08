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
exports.discountProductController = void 0;
const discountProduct_model_1 = require("./models/discountProduct.model");
const common_1 = require("@nestjs/common");
const discountProduct_service_1 = require("./discountProduct.service");
const create_discountProduct_dto_1 = require("./dto/create-discountProduct.dto");
const swagger_1 = require("@nestjs/swagger");
const update_discountProduct_dto_1 = require("./dto/update-discountProduct.dto");
const admin_guard_1 = require("../guards/admin.guard");
let discountProductController = class discountProductController {
    constructor(discountProductService) {
        this.discountProductService = discountProductService;
    }
    async create(creatediscountProductDto) {
        return this.discountProductService.create(creatediscountProductDto);
    }
    async findAll() {
        return this.discountProductService.findAll();
    }
    async findOne(id) {
        return this.discountProductService.findOne(id);
    }
    async update(id, updatediscountProductDto) {
        return this.discountProductService.update(id, updatediscountProductDto);
    }
    async delete(id) {
        return this.discountProductService.delete(id);
    }
};
exports.discountProductController = discountProductController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add discountProduct' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'New  discountProduct',
        type: [discountProduct_model_1.discountProduct],
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discountProduct_dto_1.CreatediscountProductDto]),
    __metadata("design:returntype", Promise)
], discountProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all discountProduct' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of discountProduct',
        type: [discountProduct_model_1.discountProduct],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], discountProductController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach discountProduct' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'discountProduct',
        type: discountProduct_model_1.discountProduct,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], discountProductController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update discountProduct' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated discountProduct',
        type: [discountProduct_model_1.discountProduct],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_discountProduct_dto_1.UpdatediscountProductDto]),
    __metadata("design:returntype", Promise)
], discountProductController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete discountProduct' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted discountProduct',
        type: [discountProduct_model_1.discountProduct],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], discountProductController.prototype, "delete", null);
exports.discountProductController = discountProductController = __decorate([
    (0, swagger_1.ApiTags)('discountProduct'),
    (0, common_1.Controller)('discountProduct'),
    __metadata("design:paramtypes", [discountProduct_service_1.discountProductService])
], discountProductController);
//# sourceMappingURL=discountProduct.controller.js.map