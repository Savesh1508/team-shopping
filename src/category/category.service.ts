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
import { FindCategoryDto } from './dto/find-category.dto';
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

  async updateImage(id: number, image: any) {
    const removeFile = await this.remove(id);

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

  async search(findCategoryDto: FindCategoryDto) {
    const where = {};
    if (findCategoryDto.name) {
      where['name'] = {
        [Op.like]: `%${findCategoryDto.name}%`,
      };
    }
    const category = await Category.findAll({ where });
    if (!category) {
      throw new BadRequestException('category not found');
    }
    return category;
  }
}
