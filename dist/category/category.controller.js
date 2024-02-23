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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const swagger_1 = require("@nestjs/swagger");
const category_model_1 = require("./models/category.model");
const update_category_dto_1 = require("./dto/update-category.dto");
const admin_guard_1 = require("../guards/admin.guard");
const select_limit_dto_1 = require("../admin/dto/select_limit.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    create(createCategoryDto, image) {
        return this.categoryService.create(createCategoryDto, image);
    }
    search(name) {
        return this.categoryService.search(name);
    }
    select_limit_category(selectDto) {
        return this.categoryService.limit_category(selectDto);
    }
    async findAll() {
        return this.categoryService.findAll();
    }
    async updateById(id, updateCategoryDto) {
        return this.categoryService.updateById(+id, updateCategoryDto);
    }
    updateFile(id, image) {
        return this.categoryService.updateImage(+id, image);
    }
    async findById(id) {
        return this.categoryService.findById(+id);
    }
    async deleteById(id) {
        return this.categoryService.deleteById(+id);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Category', type: [category_model_1.Category] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search category' }),
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find limited categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [category_model_1.Category] }),
    (0, common_1.Post)('limit/category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_limit_dto_1.SelectDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "select_limit_category", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all categories' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of categories',
        type: [category_model_1.Category],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Category  edit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category by Id', type: [category_model_1.Category] }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Image by id update ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'update by id image', type: [common_1.Post] }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Put)('file/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "updateFile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View category by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category', type: category_model_1.Category }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Category' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted Category',
        type: [category_model_1.Category],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteById", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map