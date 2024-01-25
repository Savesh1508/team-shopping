"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuponCodeModule = void 0;
const common_1 = require("@nestjs/common");
const cupon_code_service_1 = require("./cupon_code.service");
const cupon_code_controller_1 = require("./cupon_code.controller");
const sequelize_1 = require("@nestjs/sequelize");
const cupon_code_model_1 = require("./models/cupon_code.model");
const jwt_1 = require("@nestjs/jwt");
let CuponCodeModule = class CuponCodeModule {
};
exports.CuponCodeModule = CuponCodeModule;
exports.CuponCodeModule = CuponCodeModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([cupon_code_model_1.CuponCode]), jwt_1.JwtModule.register({})],
        controllers: [cupon_code_controller_1.CuponCodeController],
        providers: [cupon_code_service_1.CuponCodeService],
    })
], CuponCodeModule);
//# sourceMappingURL=cupon_code.module.js.map