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
exports.Discount = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const discountProduct_model_1 = require("../../discount_product/models/discountProduct.model");
let Discount = class Discount extends sequelize_typescript_1.Model {
};
exports.Discount = Discount;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unical Id' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Discount.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer discount', description: 'Chegirma nomi' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Discount.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20', description: 'Chegirma foizi' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
    }),
    __metadata("design:type", BigInt)
], Discount.prototype, "persentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '09-09-2023',
        description: 'Chegirmani boshlangan sana',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Discount.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20-09-2023', description: 'Chegirmani tugash sana' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Discount.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => discountProduct_model_1.discountProduct),
    __metadata("design:type", Array)
], Discount.prototype, "discount_product", void 0);
exports.Discount = Discount = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'discount' })
], Discount);
//# sourceMappingURL=discount.model.js.map