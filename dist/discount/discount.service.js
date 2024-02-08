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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const discount_model_1 = require("./models/discount.model");
let DiscountService = class DiscountService {
    constructor(discountRepository) {
        this.discountRepository = discountRepository;
    }
    async createDiscount(createDiscountDto) {
        const discount = await this.discountRepository.create(createDiscountDto);
        return discount;
    }
    findAllDiscount() {
        return this.discountRepository.findAll({ include: { all: true } });
    }
    async findOneDiscount(id) {
        const getDiscount = await this.discountRepository.findByPk(id);
        if (!getDiscount) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return getDiscount;
    }
    async updateDiscount(id, updateDiscountDto) {
        const discount = await this.discountRepository.findByPk(id);
        if (!discount) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updateDiscount = await this.discountRepository.update(updateDiscountDto, { where: { id }, returning: true });
        return updateDiscount[1];
    }
    async removeDiscount(id) {
        const discount = await this.discountRepository.findByPk(id);
        if (!discount) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.discountRepository.destroy({ where: { id } });
    }
};
exports.DiscountService = DiscountService;
exports.DiscountService = DiscountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(discount_model_1.Discount)),
    __metadata("design:paramtypes", [Object])
], DiscountService);
//# sourceMappingURL=discount.service.js.map