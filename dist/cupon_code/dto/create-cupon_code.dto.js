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
exports.CreateCuponCodeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateCuponCodeDto {
}
exports.CreateCuponCodeDto = CreateCuponCodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'some_name', description: 'Cupon code name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCuponCodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, description: 'Cupon code persentage' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCuponCodeDto.prototype, "persentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-01-19', description: 'Cupon code end date' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", Date)
], CreateCuponCodeDto.prototype, "end_date", void 0);
//# sourceMappingURL=create-cupon_code.dto.js.map