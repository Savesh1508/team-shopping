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
exports.CuponCode = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const order_model_1 = require("../../order/models/order.model");
let CuponCode = class CuponCode extends sequelize_typescript_1.Model {
};
exports.CuponCode = CuponCode;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Unique Id' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], CuponCode.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'some_name', description: 'Cupon code name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CuponCode.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, description: 'Cupon code persentage' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], CuponCode.prototype, "persentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-19', description: 'Cupon code end date' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
    }),
    __metadata("design:type", Date)
], CuponCode.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_model_1.Order),
    __metadata("design:type", Array)
], CuponCode.prototype, "order", void 0);
exports.CuponCode = CuponCode = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'CuponCode' })
], CuponCode);
//# sourceMappingURL=cupon_code.model.js.map