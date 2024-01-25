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
exports.CreateCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Comment name',
        description: 'Comment name',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'comment@gmail.com',
        description: 'Comment email',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12.12.2024',
        description: 'Comment created_at',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateCommentDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "zo'r",
        description: 'Comment text',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12234',
        description: 'Comment rating',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCommentDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'Comment is_active',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCommentDto.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Product id' }),
    __metadata("design:type", Number)
], CreateCommentDto.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'User id' }),
    __metadata("design:type", Number)
], CreateCommentDto.prototype, "user_id", void 0);
//# sourceMappingURL=create-comment.dto.js.map