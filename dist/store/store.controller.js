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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const store_service_1 = require("./store.service");
const create_store_dto_1 = require("./dto/create-store.dto");
const store_model_1 = require("./models/store.model");
const update_store_dto_1 = require("./dto/update-store.dto");
const admin_guard_1 = require("../guards/admin.guard");
let StoreController = class StoreController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async createStore(createStoreDto) {
        return this.storeService.createStore(createStoreDto);
    }
    async findAll() {
        return this.storeService.findAll();
    }
    async findById(id) {
        return this.storeService.findById(+id);
    }
    async deleteById(id) {
        return this.storeService.deleteById(+id);
    }
    async updateById(id, updateStoreDto) {
        return this.storeService.updateById(+id, updateStoreDto);
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Product`s count' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Store', type: [store_model_1.Store] }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "createStore", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all in store' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of products in store',
        type: [store_model_1.Store],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View product in store by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Store', type: store_model_1.Store }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete product in store' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deleted Store', type: [store_model_1.Store] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "deleteById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Store  edit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Updated Store', type: [store_model_1.Store] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "updateById", null);
exports.StoreController = StoreController = __decorate([
    (0, swagger_1.ApiTags)('Store'),
    (0, common_1.Controller)('store'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map