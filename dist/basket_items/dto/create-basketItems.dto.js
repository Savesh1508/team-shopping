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
exports.CreateBasketItemsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBasketItemsDto {
}
exports.CreateBasketItemsDto = CreateBasketItemsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "12000 so'm",
        description: 'Product total_price',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBasketItemsDto.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12',
        description: 'Product quantity',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBasketItemsDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Product id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBasketItemsDto.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Basket id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBasketItemsDto.prototype, "basket_id", void 0);
//# sourceMappingURL=create-basketItems.dto.js.map