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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const product_model_1 = require("./models/product.model");
const update_product_dto_1 = require("./dto/update-product.dto");
const admin_guard_1 = require("../guards/admin.guard");
const select_limit_dto_1 = require("../admin/dto/select_limit.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(createProductDto) {
        return this.productService.createProduct(createProductDto);
    }
    search(name, price, qr_code, brand) {
        return this.productService.search({ name, price, qr_code, brand });
    }
    select_limit_product(selectDto) {
        return this.productService.limit_product(selectDto);
    }
    async findAll() {
        return this.productService.findAll();
    }
    async findById(id) {
        return this.productService.findById(+id);
    }
    async deleteById(id) {
        return this.productService.deleteById(+id);
    }
    async updateById(id, updateProductDto) {
        return this.productService.updateById(+id, updateProductDto);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add Product' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Product', type: [product_model_1.Product] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search product' }),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('price')),
    __param(2, (0, common_1.Query)('qr_code')),
    __param(3, (0, common_1.Query)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find limited products' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [product_model_1.Product] }),
    (0, common_1.Post)('limit/product'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_limit_dto_1.SelectDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "select_limit_product", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all products' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of products',
        type: [product_model_1.Product],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View product by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product', type: product_model_1.Product }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Product' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deleted Product', type: [product_model_1.Product] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Product edit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Updated Product', type: [product_model_1.Product] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateById", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map