"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketItemsModule = void 0;
const common_1 = require("@nestjs/common");
const basketItems_service_1 = require("./basketItems.service");
const basketItems_controller_1 = require("./basketItems.controller");
const sequelize_1 = require("@nestjs/sequelize");
const basketItems_model_1 = require("./models/basketItems.model");
const product_model_1 = require("../product/models/product.model");
const basket_model_1 = require("../basket/models/basket.model");
const jwt_1 = require("@nestjs/jwt");
let BasketItemsModule = class BasketItemsModule {
};
exports.BasketItemsModule = BasketItemsModule;
exports.BasketItemsModule = BasketItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([basketItems_model_1.BasketItems, product_model_1.Product, basket_model_1.Basket]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [basketItems_controller_1.BasketItemsController],
        providers: [basketItems_service_1.BasketItemsService],
        exports: [basketItems_service_1.BasketItemsService],
    })
], BasketItemsModule);
//# sourceMappingURL=basketItems.module.js.map