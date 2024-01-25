import { Module } from '@nestjs/common';
import { CuponCodeService } from './cupon_code.service';
import { CuponCodeController } from './cupon_code.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CuponCode } from './models/cupon_code.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([CuponCode]), JwtModule.register({})],
  controllers: [CuponCodeController],
  providers: [CuponCodeService],
})
export class CuponCodeModule {}
