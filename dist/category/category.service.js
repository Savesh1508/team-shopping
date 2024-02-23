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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const category_model_1 = require("./models/category.model");
const files_service_1 = require("../files/files.service");
const sequelize_2 = require("sequelize");
let CategoryService = class CategoryService {
    constructor(categoryRepository, fileService) {
        this.categoryRepository = categoryRepository;
        this.fileService = fileService;
    }
    async create(createCategoryDto, image) {
        const fileName = await this.fileService.createFile(image);
        const category = await this.categoryRepository.create({
            ...createCategoryDto,
            image: fileName,
        });
        return category;
    }
    async limit_category(selectDto) {
        const categories = await this.categoryRepository.findAll({ include: { all: true } });
        if (categories.length === 0) {
            return {
                message: 'Category Not Found',
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        let limit_categories = [];
        if (selectDto.sort === 1 || selectDto.sort < 1) {
            let num = 0;
            for (let index = num; index < num + selectDto.limit; index++) {
                if (categories[index] === undefined)
                    break;
                limit_categories.push(categories[index]);
            }
        }
        else {
            let num = (selectDto.sort - 1) * selectDto.limit;
            for (let index = num; index < num + selectDto.limit; index++) {
                if (categories[index] === undefined)
                    break;
                limit_categories.push(categories[index]);
            }
        }
        if (limit_categories.length === 0)
            return {
                message: 'Category Not Found',
                status: common_1.HttpStatus.NOT_FOUND,
            };
        return {
            status: common_1.HttpStatus.OK,
            limit_categories,
        };
    }
    async findAll() {
        return this.categoryRepository.findAll({ include: { all: true } });
    }
    async findById(id) {
        const category = await this.categoryRepository.findOne({ include: { all: true }, where: { id } });
        return category;
    }
    async deleteById(id) {
        const category = await this.categoryRepository.destroy({ where: { id } });
        return category;
    }
    async updateById(id, updateCategoryDto) {
        const category = await this.categoryRepository.update(updateCategoryDto, {
            where: { id },
            returning: true,
        });
        return category[1][0];
    }
    async removeFile(id) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.fileService.removeFile(category.image);
    }
    async updateImage(id, image) {
        const removeFile = await this.removeFile(id);
        if (!removeFile) {
            throw new common_1.BadRequestException("Don't remove image");
        }
        const createFile = await this.fileService.createFile(image);
        const updateFile = await this.categoryRepository.update({
            image: createFile,
        }, { where: { id }, returning: true });
        return updateFile;
    }
    async remove(id) {
        const post = await this.categoryRepository.findOne({ where: { id } });
        if (!post) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.fileService.removeFile(post.image);
    }
    async search(name) {
        const where = {};
        if (name) {
            where['name'] = {
                [sequelize_2.Op.like]: `%${name}%`,
            };
        }
        const category = await category_model_1.Category.findAll({ where });
        if (!category) {
            throw new common_1.BadRequestException('Category not found');
        }
        return category;
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(category_model_1.Category)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], CategoryService);
//# sourceMappingURL=category.service.js.map