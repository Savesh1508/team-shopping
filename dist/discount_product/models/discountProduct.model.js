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
exports.discountProduct = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const discount_model_1 = require("../../discount/models/discount.model");
const product_model_1 = require("../../product/models/product.model");
let discountProduct = class discountProduct extends sequelize_typescript_1.Model {
};
exports.discountProduct = discountProduct;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], discountProduct.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], discountProduct.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], discountProduct.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => discount_model_1.Discount),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], discountProduct.prototype, "discount_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => discount_model_1.Discount),
    __metadata("design:type", discount_model_1.Discount)
], discountProduct.prototype, "discount", void 0);
exports.discountProduct = discountProduct = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'discountProduct' })
], discountProduct);
//# sourceMappingURL=discountProduct.model.js.map