import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Discount } from './models/discount.model';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount) private discountRepository: typeof Discount,
  ) {}

  async createDiscount(createDiscountDto: CreateDiscountDto) {
    const discount = await this.discountRepository.create(createDiscountDto);
    return discount;
  }

  findAllDiscount() {
    return this.discountRepository.findAll();
  }

  async findOneDiscount(id: number) {
    const getDiscount = await this.discountRepository.findByPk(id);

    if (!getDiscount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return getDiscount;
  }

  async updateDiscount(id: number, updateDiscountDto: UpdateDiscountDto) {
    const discount = await this.discountRepository.findByPk(id);

    if (!discount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const updateDiscount = await this.discountRepository.update(
      updateDiscountDto,
      { where: { id }, returning: true },
    );
    return updateDiscount[1];
  }

  async removeDiscount(id: number) {
    const discount = await this.discountRepository.findByPk(id);

    if (!discount) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.discountRepository.destroy({ where: { id } });
  }
}
