import { Module } from '@nestjs/common';
import { UserAddressService } from './userAddress.service';
import { UserAddressController } from './userAddress.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserAddress } from './models/userAddress.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserAddress]),JwtModule.register({}) ],
  controllers: [UserAddressController],
  providers: [UserAddressService],
  exports: [UserAddressService],
})
export class UserAddressModule {}
