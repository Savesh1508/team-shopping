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
import { SelectDto } from '../admin/dto/select_limit.dto';

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

  
  async limit_category(selectDto: SelectDto): Promise<Object> {
    const categories = await this.categoryRepository.findAll({include:{all:true}});

    if (categories.length === 0) {
      return {
        message: 'Category Not Found',
        status: HttpStatus.NOT_FOUND,
      };
    }

    let limit_categories = [];
    if (selectDto.sort === 1 || selectDto.sort < 1) {
      let num = 0;
      for (let index = num; index < num + selectDto.limit; index++) {
        if (categories[index] === undefined) break;

        limit_categories.push(categories[index]);
      }
    } else {
      let num = (selectDto.sort - 1) * selectDto.limit;
      for (let index = num; index < num + selectDto.limit; index++) {
        if (categories[index] === undefined) break;

        limit_categories.push(categories[index]);
      }
    }

    if (limit_categories.length === 0)
      return {
        message: 'Category Not Found',
        status: HttpStatus.NOT_FOUND,
      };

    return {
      status: HttpStatus.OK,
      limit_categories,
    };
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll({include: {all:true}});
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({include: {all:true},where:{id}});
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
