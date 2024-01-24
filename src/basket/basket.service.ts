import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './models/basket.model';

@Injectable()
export class BasketService {
  constructor(@InjectModel(Basket) private basketRepository: typeof Basket) {}

  async create(createBasketDto: CreateBasketDto) {
    const media = await this.basketRepository.create(createBasketDto);
    return media;
  }

  async findAll(): Promise<Basket[]> {
    return this.basketRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Basket> {
    const media = await this.basketRepository.findByPk(id);
    return media;
  }

  async update(id: number, updateBasketDto: UpdateBasketDto): Promise<Basket> {
    const builder = await this.basketRepository.update(updateBasketDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.basketRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
