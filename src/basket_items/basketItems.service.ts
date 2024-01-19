import { Injectable } from '@nestjs/common';
import { CreateBasketItemsDto } from './dto/create-basketItems.dto';
import { UpdateBasketItemsDto } from './dto/update-basketItems.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BasketItems } from './models/basketItems.model';

@Injectable()
export class BasketItemsService {
  constructor(
    @InjectModel(BasketItems) private basketItemsRepository: typeof BasketItems,
  ) {}

  async create(createBasketItemsDto: CreateBasketItemsDto) {
    const media = await this.basketItemsRepository.create(createBasketItemsDto);
    return media;
  }

  async findAll(): Promise<BasketItems[]> {
    return this.basketItemsRepository.findAll();
  }

  async findOne(id: number): Promise<BasketItems> {
    const media = await this.basketItemsRepository.findByPk(id);
    return media;
  }

  async update(
    id: number,
    updateBasketItemsDto: UpdateBasketItemsDto,
  ): Promise<BasketItems> {
    const builder = await this.basketItemsRepository.update(
      updateBasketItemsDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.basketItemsRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
