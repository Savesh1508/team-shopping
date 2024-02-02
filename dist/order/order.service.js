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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("./models/order.model");
const product_model_1 = require("../product/models/product.model");
let OrderService = class OrderService {
    constructor(orderRepository, productRepo) {
        this.orderRepository = orderRepository;
        this.productRepo = productRepo;
    }
    async create(createOrderDto) {
        const order = await this.orderRepository.create(createOrderDto);
        return order;
    }
    async findAll() {
        return this.orderRepository.findAll({ include: { all: true } });
    }
    async findOne(id) {
        const order = await this.orderRepository.findByPk(id);
        return order;
    }
    async update(id, updateOrderDto) {
        const builder = await this.orderRepository.update(updateOrderDto, {
            where: { id },
            returning: true,
        });
        return builder[1][0].dataValues;
    }
    async delete(id) {
        const numRowsDeleted = await this.orderRepository.destroy({
            where: { id },
        });
        if (numRowsDeleted === 0) {
            throw new Error(`Could not delete venue type with id ${id}`);
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(order_model_1.Order)),
    __param(1, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __metadata("design:paramtypes", [Object, Object])
], OrderService);
//# sourceMappingURL=order.service.js.map