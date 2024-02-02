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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const category_model_1 = require("../../category/models/category.model");
const store_model_1 = require("../../store/models/store.model");
const discountProduct_model_1 = require("../../discount_product/models/discountProduct.model");
const basketItems_model_1 = require("../../basket_items/models/basketItems.model");
const media_model_1 = require("../../media/models/media.model");
const comment_model_1 = require("../../comment/models/comment.model");
let Product = class Product extends sequelize_typescript_1.Model {
};
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Apple', description: 'Product`s name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is red apple',
        description: 'Product`s description',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '25.000.000',
        description: 'Product`s price',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '30',
        description: 'Amount product',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Product.prototype, "total_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '01.01.2014',
        description: 'Date of manufacture',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "mfg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1 year',
        description: 'Product expiration date',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "life", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '8m66567',
        description: 'Product`s qr code',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "qr_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '30kg',
        description: 'Product`s value',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Almazar',
        description: 'Product`s brand',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5 star',
        description: 'Product`s rating',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'Product`s active',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: 'true',
    }),
    __metadata("design:type", Boolean)
], Product.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'kg',
        description: 'Unit of measure',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "unit_of_measure", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => category_model_1.Category),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Number)
], Product.prototype, "category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => store_model_1.Store),
    __metadata("design:type", Array)
], Product.prototype, "store", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => discountProduct_model_1.discountProduct),
    __metadata("design:type", Array)
], Product.prototype, "discount_product", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basketItems_model_1.BasketItems),
    __metadata("design:type", Array)
], Product.prototype, "basketItems", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => media_model_1.Media),
    __metadata("design:type", Array)
], Product.prototype, "media", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_model_1.Comment1),
    __metadata("design:type", Array)
], Product.prototype, "comment", void 0);
exports.Product = Product = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Product' })
], Product);
//# sourceMappingURL=product.model.js.map