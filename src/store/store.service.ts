import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from './models/store.model';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store) private storeRepo: typeof Store) {}

  async createStore(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = await this.storeRepo.create(createStoreDto);
    return store;
  }

  async findAll(): Promise<Store[]> {
    return this.storeRepo.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Store> {
    const store = await this.storeRepo.findByPk(id);
    return store;
  }

  async deleteById(id: number): Promise<number> {
    const store = await this.storeRepo.destroy({ where: { id } });
    return store;
  }

  async updateById(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
    const store = await this.storeRepo.update(updateStoreDto, {
      where: { id },
      returning: true,
    });

    return store[1][0];
  }
}
