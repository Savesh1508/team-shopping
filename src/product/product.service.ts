import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { FindProductDto } from './dto/find-product.dto';
import { Op } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productRepo: typeof Product) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.productRepo.create(createProductDto);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.productRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepo.findByPk(id);
    return product;
  }

  async deleteById(id: number): Promise<number> {
    const product = await this.productRepo.destroy({ where: { id } });
    return product;
  }

  async updateById(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productRepo.update(updateProductDto, {
      where: { id },
      returning: true,
    });

    return product[1][0];
  }

  async search(findProductDto: FindProductDto) {
    const where = {};
    if (findProductDto.name) {
      where['name'] = {
        [Op.like]: `%${findProductDto.name}%`,
      };
    }
    if (findProductDto.price) {
      where['price'] = {
        [Op.like]: `%${findProductDto.price}%`,
      };
    }
    if (findProductDto.qr_code) {
      where['qr_code'] = {
        [Op.like]: `%${findProductDto.qr_code}%`,
      };
    }
    if (findProductDto.brand) {
      where['brand'] = {
        [Op.like]: `%${findProductDto.brand}%`,
      };
    }
    const product = await Product.findAll({ where });
    if (!product) {
      throw new BadRequestException('product not found');
    }
    return product;
  }
}
