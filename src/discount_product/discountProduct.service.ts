import { Injectable } from '@nestjs/common';
import { CreatediscountProductDto } from './dto/create-discountProduct.dto';
import { UpdatediscountProductDto } from './dto/update-discountProduct.dto';
import { InjectModel } from '@nestjs/sequelize';
import { discountProduct } from './models/discountProduct.model';

@Injectable()
export class discountProductService {
  constructor(
    @InjectModel(discountProduct)
    private discountProductRepository: typeof discountProduct,
  ) {}

  async create(creatediscountProductDto: CreatediscountProductDto) {
    const discount_product = await this.discountProductRepository.create(
      creatediscountProductDto,
    );
    return discount_product;
  }

  async findAll(): Promise<discountProduct[]> {
    return this.discountProductRepository.findAll();
  }

  async findOne(id: number): Promise<discountProduct> {
    const discount_product = await this.discountProductRepository.findByPk(id);
    return discount_product;
  }

  async update(
    id: number,
    updatediscountProductDto: UpdatediscountProductDto,
  ): Promise<discountProduct> {
    const builder = await this.discountProductRepository.update(
      updatediscountProductDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.discountProductRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
