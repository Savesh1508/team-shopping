import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCuponCodeDto } from './dto/create-cupon_code.dto';
import { UpdateCuponCodeDto } from './dto/update-cupon_code.dto';
import { CuponCode } from './models/cupon_code.model';

@Injectable()
export class CuponCodeService {
  constructor(
    @InjectModel(CuponCode) private cuponCodeRepo: typeof CuponCode,
  ) {}

  async createCuponCode(createCuponCodeDto: CreateCuponCodeDto) {
    const cupon_code = await this.cuponCodeRepo.create(createCuponCodeDto);
    return cupon_code;
  }

  async getAllCuponCodes(): Promise<CuponCode[]> {
    const cupon_codes = await this.cuponCodeRepo.findAll({
      include: { all: true },
    });
    return cupon_codes;
  }

  async getCuponCodeById(id: number) {
    const cupon_code = await this.cuponCodeRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return cupon_code;
  }

  async updateCuponCodeById(
    id: number,
    updateCuponCodeDto: UpdateCuponCodeDto,
  ): Promise<CuponCode> {
    const cupon_code = await this.cuponCodeRepo.update(updateCuponCodeDto, {
      where: { id },
      returning: true,
    });
    return cupon_code[1][0].dataValues;
  }

  async deleteCuponCodeById(id: number) {
    const cupon_code = await this.cuponCodeRepo.destroy({ where: { id } });
    if (!cupon_code) {
      throw new HttpException('Cupon code not found!', HttpStatus.NOT_FOUND);
    }
    return { message: 'Cupon code has deleted!' };
  }
}
