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
exports.BasketItemsController = void 0;
const basketItems_model_1 = require("./models/basketItems.model");
const common_1 = require("@nestjs/common");
const basketItems_service_1 = require("./basketItems.service");
const create_basketItems_dto_1 = require("./dto/create-basketItems.dto");
const swagger_1 = require("@nestjs/swagger");
const update_basketItems_dto_1 = require("./dto/update-basketItems.dto");
const selfClient_guard_1 = require("../guards/selfClient.guard");
let BasketItemsController = class BasketItemsController {
    constructor(basketItemsService) {
        this.basketItemsService = basketItemsService;
    }
    async create(createBasketItemsDto) {
        return this.basketItemsService.create(createBasketItemsDto);
    }
    async findAll() {
        return this.basketItemsService.findAll();
    }
    async findOne(id) {
        return this.basketItemsService.findOne(id);
    }
    async update(id, updateBasketItemsDto) {
        return this.basketItemsService.update(id, updateBasketItemsDto);
    }
    async delete(id) {
        return this.basketItemsService.delete(id);
    }
};
exports.BasketItemsController = BasketItemsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add BasketItems' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'New  BasketItems',
        type: [basketItems_model_1.BasketItems],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_basketItems_dto_1.CreateBasketItemsDto]),
    __metadata("design:returntype", Promise)
], BasketItemsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all BasketItems' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of BasketItems',
        type: [basketItems_model_1.BasketItems],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BasketItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach BasketItems' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'BasketItems by Id',
        type: [basketItems_model_1.BasketItems],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BasketItemsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update BasketItems' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated BasketItems',
        type: [basketItems_model_1.BasketItems],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_basketItems_dto_1.UpdateBasketItemsDto]),
    __metadata("design:returntype", Promise)
], BasketItemsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete BasketItems' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted BasketItems',
        type: [basketItems_model_1.BasketItems],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BasketItemsController.prototype, "delete", null);
exports.BasketItemsController = BasketItemsController = __decorate([
    (0, swagger_1.ApiTags)('BasketItems'),
    (0, common_1.Controller)('basketItems'),
    __metadata("design:paramtypes", [basketItems_service_1.BasketItemsService])
], BasketItemsController);
//# sourceMappingURL=basketItems.controller.js.map