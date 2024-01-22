import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { FilesService } from '../files/files.service';
import { Op } from 'sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
    private readonly fileService: FilesService,
  ) {}

  async create(createCategoryDto: CreateCategoryDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const category = await this.categoryRepository.create({
      ...createCategoryDto,
      image: fileName,
    });
    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findByPk(id);
    return category;
  }

  async deleteById(id: number): Promise<number> {
    const category = await this.categoryRepository.destroy({ where: { id } });
    return category;
  }

  async updateById(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryRepository.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });

    return category[1][0];
  }

  async removeFile(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } });

    if (!category) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.fileService.removeFile(category.image);
  }

  async updateImage(id: number, image: any) {
    const removeFile = await this.removeFile(id);

    if (!removeFile) {
      throw new BadRequestException("Don't remove image");
    }

    const createFile = await this.fileService.createFile(image);
    const updateFile = await this.categoryRepository.update(
      {
        image: createFile,
      },
      { where: { id }, returning: true },
    );
    return updateFile;
  }

  async remove(id: number) {
    const post = await this.categoryRepository.findOne({ where: { id } });

    if (!post) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.fileService.removeFile(post.image);
  }

  async search(name: string) {
    const where = {};

    if (name) {
      where['name'] = {
        [Op.like]: `%${name}%`,
      };
    }
    const category = await Category.findAll({ where });
    if (!category) {
      throw new BadRequestException('Category not found');
    }
    return category;
  }
}
