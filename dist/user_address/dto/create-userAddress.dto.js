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
exports.CreateUserAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserAddressDto {
}
exports.CreateUserAddressDto = CreateUserAddressDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toshkent', description: 'Address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "address_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'f23t3434t2vf', description: 'Location' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12', description: 'Street' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toshkent shaxri', description: 'Region' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '122', description: 'Home number' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "home_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '22', description: 'Flat number' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "flat_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'Entrance' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "entrance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3', description: 'Floor' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserAddressDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'User id' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUserAddressDto.prototype, "user_id", void 0);
//# sourceMappingURL=create-userAddress.dto.js.map