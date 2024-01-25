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
exports.BasketController = void 0;
const basket_model_1 = require("./models/basket.model");
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const create_basket_dto_1 = require("./dto/create-basket.dto");
const swagger_1 = require("@nestjs/swagger");
const update_basket_dto_1 = require("./dto/update-basket.dto");
const selfClient_guard_1 = require("../guards/selfClient.guard");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    async create(createBasketDto) {
        return this.basketService.create(createBasketDto);
    }
    async findAll() {
        return this.basketService.findAll();
    }
    async findOne(id) {
        return this.basketService.findOne(id);
    }
    async update(id, updateBasketDto) {
        return this.basketService.update(id, updateBasketDto);
    }
    async delete(id) {
        return this.basketService.delete(id);
    }
};
exports.BasketController = BasketController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Basket' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Basket', type: [basket_model_1.Basket] }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_basket_dto_1.CreateBasketDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all Basket' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of Basket',
        type: [basket_model_1.Basket],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Basket' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Basket by Id', type: [basket_model_1.Basket] }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Basket' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Updated Basket', type: [basket_model_1.Basket] }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_basket_dto_1.UpdateBasketDto]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Basket' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deleted Basket', type: [basket_model_1.Basket] }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BasketController.prototype, "delete", null);
exports.BasketController = BasketController = __decorate([
    (0, swagger_1.ApiTags)('Basket'),
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
//# sourceMappingURL=basket.controller.js.map