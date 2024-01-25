"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./store.service");
const store_controller_1 = require("./store.controller");
const sequelize_1 = require("@nestjs/sequelize");
const store_model_1 = require("./models/store.model");
const jwt_1 = require("@nestjs/jwt");
const product_model_1 = require("../product/models/product.model");
let StoreModule = class StoreModule {
};
exports.StoreModule = StoreModule;
exports.StoreModule = StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([store_model_1.Store, product_model_1.Product]), jwt_1.JwtModule],
        controllers: [store_controller_1.StoreController],
        providers: [store_service_1.StoreService],
        exports: [store_service_1.StoreService],
    })
], StoreModule);
//# sourceMappingURL=store.module.js.map