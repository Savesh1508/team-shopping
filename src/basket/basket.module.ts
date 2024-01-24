import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './models/basket.model';
import { User } from 'src/user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Basket,User])],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService],
})
export class BasketModule {}
