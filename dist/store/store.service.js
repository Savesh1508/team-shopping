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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const store_model_1 = require("./models/store.model");
let StoreService = class StoreService {
    constructor(storeRepo) {
        this.storeRepo = storeRepo;
    }
    async createStore(createStoreDto) {
        const store = await this.storeRepo.create(createStoreDto);
        return store;
    }
    async findAll() {
        return this.storeRepo.findAll({ include: { all: true } });
    }
    async findById(id) {
        const store = await this.storeRepo.findByPk(id);
        return store;
    }
    async deleteById(id) {
        const store = await this.storeRepo.destroy({ where: { id } });
        return store;
    }
    async updateById(id, updateStoreDto) {
        const store = await this.storeRepo.update(updateStoreDto, {
            where: { id },
            returning: true,
        });
        return store[1][0];
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(store_model_1.Store)),
    __metadata("design:paramtypes", [Object])
], StoreService);
//# sourceMappingURL=store.service.js.map