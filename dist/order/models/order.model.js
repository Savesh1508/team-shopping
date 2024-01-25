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
exports.Order = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const basket_model_1 = require("../../basket/models/basket.model");
const cupon_code_model_1 = require("../../cupon_code/models/cupon_code.model");
const user_model_1 = require("../../user/models/user.model");
const userAddress_model_1 = require("../../user_address/models/userAddress.model");
let Order = class Order extends sequelize_typescript_1.Model {
};
exports.Order = Order;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998123456789', description: 'Order phone number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.12.2024', description: 'Order date' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Order.prototype, "order_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.12.2024', description: 'Comment created_at' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Order status' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Order.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'karta', description: 'Order payment type' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "payment_type", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => userAddress_model_1.UserAddress),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Order.prototype, "userAddres_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => userAddress_model_1.UserAddress),
    __metadata("design:type", userAddress_model_1.UserAddress)
], Order.prototype, "userAddres", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => basket_model_1.Basket),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Order.prototype, "basket_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => basket_model_1.Basket),
    __metadata("design:type", basket_model_1.Basket)
], Order.prototype, "basket", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cupon_code_model_1.CuponCode),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Order.prototype, "cupon_code_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cupon_code_model_1.CuponCode),
    __metadata("design:type", cupon_code_model_1.CuponCode)
], Order.prototype, "cupon_code", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Order.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Order.prototype, "user", void 0);
exports.Order = Order = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Order' })
], Order);
//# sourceMappingURL=order.model.js.map