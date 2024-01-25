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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("./models/product.model");
const sequelize_2 = require("sequelize");
let ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async createProduct(createProductDto) {
        const product = await this.productRepo.create(createProductDto);
        return product;
    }
    async findAll() {
        return this.productRepo.findAll({ include: { all: true } });
    }
    async findById(id) {
        const product = await this.productRepo.findByPk(id);
        return product;
    }
    async deleteById(id) {
        const product = await this.productRepo.destroy({ where: { id } });
        return product;
    }
    async updateById(id, updateProductDto) {
        const product = await this.productRepo.update(updateProductDto, {
            where: { id },
            returning: true,
        });
        return product[1][0];
    }
    async search({ name, price, qr_code, brand }) {
        const where = {};
        if (name) {
            where['name'] = {
                [sequelize_2.Op.like]: `%${name}%`,
            };
        }
        if (price) {
            where['price'] = {
                [sequelize_2.Op.like]: `%${price}%`,
            };
        }
        if (qr_code) {
            where['qr_code'] = {
                [sequelize_2.Op.like]: `%${qr_code}%`,
            };
        }
        if (brand) {
            where['brand'] = {
                [sequelize_2.Op.like]: `%${brand}%`,
            };
        }
        const product = await product_model_1.Product.findAll({ where });
        if (!product) {
            throw new common_1.BadRequestException('product not found');
        }
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=product.service.js.map