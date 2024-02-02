"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const sequelize_1 = require("@nestjs/sequelize");
const order_model_1 = require("./models/order.model");
const cupon_code_model_1 = require("../cupon_code/models/cupon_code.model");
const basket_model_1 = require("../basket/models/basket.model");
const userAddress_model_1 = require("../user_address/models/userAddress.model");
const user_model_1 = require("../user/models/user.model");
const jwt_1 = require("@nestjs/jwt");
const product_model_1 = require("../product/models/product.model");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([order_model_1.Order, cupon_code_model_1.CuponCode, basket_model_1.Basket, userAddress_model_1.UserAddress, user_model_1.User, product_model_1.Product]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
        exports: [order_service_1.OrderService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map