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
exports.Basket = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const basketItems_model_1 = require("../../basket_items/models/basketItems.model");
const order_model_1 = require("../../order/models/order.model");
const user_model_1 = require("../../user/models/user.model");
let Basket = class Basket extends sequelize_typescript_1.Model {
};
exports.Basket = Basket;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Basket.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.12.2024', description: 'Basket created_at' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Basket.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Basket is_active' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Basket.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_model_1.Order),
    __metadata("design:type", Array)
], Basket.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => basketItems_model_1.BasketItems),
    __metadata("design:type", Array)
], Basket.prototype, "basketItems", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Basket.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Basket.prototype, "user", void 0);
exports.Basket = Basket = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Basket' })
], Basket);
//# sourceMappingURL=basket.model.js.map