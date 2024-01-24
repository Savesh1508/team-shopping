import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './models/basket.model';

@Module({
  imports: [SequelizeModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService],
})
export class BasketModule {}
