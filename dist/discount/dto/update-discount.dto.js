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
exports.UpdateDiscountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_discount_dto_1 = require("./create-discount.dto");
const class_validator_1 = require("class-validator");
class UpdateDiscountDto extends (0, swagger_1.PartialType)(create_discount_dto_1.CreateDiscountDto) {
}
exports.UpdateDiscountDto = UpdateDiscountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer discount', description: 'Chegirma nomi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDiscountDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20', description: 'Chegirma foizi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", BigInt)
], UpdateDiscountDto.prototype, "persentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '09-09-2023',
        description: 'Chegirmani boshlangan sana',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateDiscountDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20-09-2023', description: 'Chegirmani tugash sana' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateDiscountDto.prototype, "end_date", void 0);
//# sourceMappingURL=update-discount.dto.js.map