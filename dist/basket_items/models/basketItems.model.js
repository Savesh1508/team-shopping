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
exports.BasketItems = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const basket_model_1 = require("../../basket/models/basket.model");
const product_model_1 = require("../../product/models/product.model");
let BasketItems = class BasketItems extends sequelize_typescript_1.Model {
};
exports.BasketItems = BasketItems;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], BasketItems.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "12000 so'm",
        description: 'BasketItems total_price',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], BasketItems.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '122345', description: 'BasketItems quantity' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], BasketItems.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], BasketItems.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], BasketItems.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => basket_model_1.Basket),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], BasketItems.prototype, "basket_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => basket_model_1.Basket),
    __metadata("design:type", basket_model_1.Basket)
], BasketItems.prototype, "basket", void 0);
exports.BasketItems = BasketItems = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'BasketItems' })
], BasketItems);
//# sourceMappingURL=basketItems.model.js.map