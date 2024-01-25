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
exports.UserAddress = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("../../order/models/order.model");
let UserAddress = class UserAddress extends sequelize_typescript_1.Model {
};
exports.UserAddress = UserAddress;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], UserAddress.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toshkent', description: 'Address' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "address_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f23t3434t2vf', description: 'Location' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'Street' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toshkent shaxri', description: 'Region' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '122', description: 'Home number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "home_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '22', description: 'Flat number' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "flat_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'Entrance' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "entrance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'Floor' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UserAddress.prototype, "floor", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_model_1.Order),
    __metadata("design:type", Array)
], UserAddress.prototype, "order", void 0);
exports.UserAddress = UserAddress = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'UserAddress' })
], UserAddress);
//# sourceMappingURL=userAddress.model.js.map