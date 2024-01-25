"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountProductModule = void 0;
const common_1 = require("@nestjs/common");
const discountProduct_service_1 = require("./discountProduct.service");
const discountProduct_controller_1 = require("./discountProduct.controller");
const sequelize_1 = require("@nestjs/sequelize");
const discountProduct_model_1 = require("./models/discountProduct.model");
const discount_model_1 = require("../discount/models/discount.model");
const product_model_1 = require("../product/models/product.model");
const jwt_1 = require("@nestjs/jwt");
let discountProductModule = class discountProductModule {
};
exports.discountProductModule = discountProductModule;
exports.discountProductModule = discountProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([discountProduct_model_1.discountProduct, discount_model_1.Discount, product_model_1.Product]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [discountProduct_controller_1.discountProductController],
        providers: [discountProduct_service_1.discountProductService],
        exports: [discountProduct_service_1.discountProductService],
    })
], discountProductModule);
//# sourceMappingURL=discountProduct.module.js.map