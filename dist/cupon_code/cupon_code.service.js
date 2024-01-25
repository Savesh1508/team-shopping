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
exports.CuponCodeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const cupon_code_model_1 = require("./models/cupon_code.model");
let CuponCodeService = class CuponCodeService {
    constructor(cuponCodeRepo) {
        this.cuponCodeRepo = cuponCodeRepo;
    }
    async createCuponCode(createCuponCodeDto) {
        const cupon_code = await this.cuponCodeRepo.create(createCuponCodeDto);
        return cupon_code;
    }
    async getAllCuponCodes() {
        const cupon_codes = await this.cuponCodeRepo.findAll({
            include: { all: true },
        });
        return cupon_codes;
    }
    async getCuponCodeById(id) {
        const cupon_code = await this.cuponCodeRepo.findOne({
            where: { id },
            include: { all: true },
        });
        return cupon_code;
    }
    async updateCuponCodeById(id, updateCuponCodeDto) {
        const cupon_code = await this.cuponCodeRepo.update(updateCuponCodeDto, {
            where: { id },
            returning: true,
        });
        return cupon_code[1][0].dataValues;
    }
    async deleteCuponCodeById(id) {
        const cupon_code = await this.cuponCodeRepo.destroy({ where: { id } });
        if (!cupon_code) {
            throw new common_1.HttpException('Cupon code not found!', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Cupon code has deleted!' };
    }
};
exports.CuponCodeService = CuponCodeService;
exports.CuponCodeService = CuponCodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(cupon_code_model_1.CuponCode)),
    __metadata("design:paramtypes", [Object])
], CuponCodeService);
//# sourceMappingURL=cupon_code.service.js.map