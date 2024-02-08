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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const discount_service_1 = require("./discount.service");
const create_discount_dto_1 = require("./dto/create-discount.dto");
const update_discount_dto_1 = require("./dto/update-discount.dto");
const swagger_1 = require("@nestjs/swagger");
const discount_model_1 = require("./models/discount.model");
const admin_guard_1 = require("../guards/admin.guard");
let DiscountController = class DiscountController {
    constructor(discountService) {
        this.discountService = discountService;
    }
    create(createDiscountDto) {
        return this.discountService.createDiscount(createDiscountDto);
    }
    findAll() {
        return this.discountService.findAllDiscount();
    }
    findOne(id) {
        return this.discountService.findOneDiscount(+id);
    }
    update(id, updateDiscountDto) {
        return this.discountService.updateDiscount(+id, updateDiscountDto);
    }
    async remove(id) {
        return this.discountService.removeDiscount(+id);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add discount by Admin' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Discount', type: [discount_model_1.Discount] }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discount_dto_1.CreateDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'list of discounts' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: discount_model_1.Discount }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View discount by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: discount_model_1.Discount }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update discount by id by Admin' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: discount_model_1.Discount }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_discount_dto_1.UpdateDiscountDto]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete discount by id by Admin' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted Discount',
        type: [discount_model_1.Discount],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "remove", null);
exports.DiscountController = DiscountController = __decorate([
    (0, swagger_1.ApiTags)('Discount'),
    (0, common_1.Controller)('discount'),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountController);
//# sourceMappingURL=discount.controller.js.map