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
exports.CuponCodeController = void 0;
const common_1 = require("@nestjs/common");
const cupon_code_service_1 = require("./cupon_code.service");
const create_cupon_code_dto_1 = require("./dto/create-cupon_code.dto");
const update_cupon_code_dto_1 = require("./dto/update-cupon_code.dto");
const cupon_code_model_1 = require("./models/cupon_code.model");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let CuponCodeController = class CuponCodeController {
    constructor(cuponCodeService) {
        this.cuponCodeService = cuponCodeService;
    }
    async createCuponCode(createCuponCodeDto) {
        const cupon_code = await this.cuponCodeService.createCuponCode(createCuponCodeDto);
        return cupon_code;
    }
    async getAllCuponCodes() {
        const cupon_codes = await this.cuponCodeService.getAllCuponCodes();
        return cupon_codes;
    }
    async getCuponCodeById(id) {
        const cupon_code = await this.cuponCodeService.getCuponCodeById(+id);
        return cupon_code;
    }
    async updateCuponCodeById(id, updateComanyDto) {
        const cupon_code = await this.cuponCodeService.updateCuponCodeById(+id, updateComanyDto);
        return cupon_code;
    }
    async deleteServiceById(id) {
        const cupon_code = await this.cuponCodeService.deleteCuponCodeById(+id);
        return cupon_code;
    }
};
exports.CuponCodeController = CuponCodeController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create cupon code' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'New cupon code',
        type: [cupon_code_model_1.CuponCode],
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cupon_code_dto_1.CreateCuponCodeDto]),
    __metadata("design:returntype", Promise)
], CuponCodeController.prototype, "createCuponCode", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all cupon codes' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of cupon codes',
        type: [cupon_code_model_1.CuponCode],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CuponCodeController.prototype, "getAllCuponCodes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get cupon code by Id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Cupon code by Id',
        type: [cupon_code_model_1.CuponCode],
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CuponCodeController.prototype, "getCuponCodeById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update cupon code by Id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated cupon code',
        type: [cupon_code_model_1.CuponCode],
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cupon_code_dto_1.UpdateCuponCodeDto]),
    __metadata("design:returntype", Promise)
], CuponCodeController.prototype, "updateCuponCodeById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete cupon code by Id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted cupon code',
        type: [cupon_code_model_1.CuponCode],
    }),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CuponCodeController.prototype, "deleteServiceById", null);
exports.CuponCodeController = CuponCodeController = __decorate([
    (0, swagger_1.ApiTags)('Cupon_codes'),
    (0, common_1.Controller)('cupon_code'),
    __metadata("design:paramtypes", [cupon_code_service_1.CuponCodeService])
], CuponCodeController);
//# sourceMappingURL=cupon_code.controller.js.map