import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { Op } from 'sequelize';
import { SelectDto } from '../admin/dto/select_limit.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private productRepo: typeof Product) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.productRepo.create(createProductDto);
    console.log(product);

    return product;
  }

  async limit_product(selectDto: SelectDto): Promise<Object> {
    const products = await this.productRepo.findAll({ include: { all: true } });

    if (products.length === 0) {
      return {
        message: 'Product Not Found',
        status: HttpStatus.NOT_FOUND,
      };
    }

    let limit_products = [];
    if (selectDto.sort === 1 || selectDto.sort < 1) {
      let num = 0;
      for (let index = num; index < num + selectDto.limit; index++) {
        if (products[index] === undefined) break;

        limit_products.push(products[index]);
      }
    } else {
      let num = (selectDto.sort - 1) * selectDto.limit;
      for (let index = num; index < num + selectDto.limit; index++) {
        if (products[index] === undefined) break;

        limit_products.push(products[index]);
      }
    }

    if (limit_products.length === 0)
      return {
        message: 'Products Not Found',
        status: HttpStatus.NOT_FOUND,
      };

    return {
      status: HttpStatus.OK,
      limit_products,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.productRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      include: { all: true },
      where: { id },
    });
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

  async search({ name, price, qr_code, brand }) {
    const where = {};
    console.log(name, price);

    if (name) {
      where['name'] = {
        [Op.like]: `%${name}%`,
      };
    }
    if (price) {
      where['price'] = {
        [Op.like]: `%${price}%`,
      };
    }
    if (qr_code) {
      where['qr_code'] = {
        [Op.like]: `%${qr_code}%`,
      };
    }
    if (brand) {
      where['brand'] = {
        [Op.like]: `%${brand}%`,
      };
    }
    const product = await Product.findAll({ where, include: { all: true } });
    if (!product) {
      throw new BadRequestException('product not found');
    }
    return product;
  }
}
