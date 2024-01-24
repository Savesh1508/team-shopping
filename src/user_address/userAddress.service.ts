import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create-userAddress.dto';
import { UpdateuserAddressDto } from './dto/update-userAddress.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserAddress } from './models/userAddress.model';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectModel(UserAddress) private userAddressRepository: typeof UserAddress,
  ) {}

  async create(createUserAddressDto: CreateUserAddressDto) {
    const media = await this.userAddressRepository.create(createUserAddressDto);
    return media;
  }

  async findAll(): Promise<UserAddress[]> {
    return this.userAddressRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<UserAddress> {
    const media = await this.userAddressRepository.findByPk(id);
    return media;
  }

  async update(
    id: number,
    updateUserAddressDto: UpdateuserAddressDto,
  ): Promise<UserAddress> {
    const builder = await this.userAddressRepository.update(
      updateUserAddressDto,
      {
        where: { id },
        returning: true,
      },
    );
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.userAddressRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
