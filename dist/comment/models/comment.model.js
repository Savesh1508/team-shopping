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
exports.Comment1 = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../../product/models/product.model");
const user_model_1 = require("../../user/models/user.model");
let Comment1 = class Comment1 extends sequelize_typescript_1.Model {
};
exports.Comment1 = Comment1;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unikal ID' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Comment1.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Comment name', description: 'Comment name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Comment1.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'comment@gmail.com', description: 'Comment email' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Comment1.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12.12.2024', description: 'Comment created_at' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Comment1.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "zo'r", description: 'Comment text' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Comment1.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '122345', description: 'Comment rated' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Comment1.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Comment is_active' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Comment1.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Comment1.prototype, "product_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], Comment1.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Comment1.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Comment1.prototype, "user", void 0);
exports.Comment1 = Comment1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Comment' })
], Comment1);
//# sourceMappingURL=comment.model.js.map