import { Module } from '@nestjs/common';
import { BasketItemsService } from './basketItems.service';
import { BasketItemsController } from './basketItems.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketItems } from './models/basketItems.model';
import { Product } from 'src/product/models/product.model';
import { Basket } from 'src/basket/models/basket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([BasketItems, Product, Basket]),
    JwtModule.register({}),
  ],
  controllers: [BasketItemsController],
  providers: [BasketItemsService],
  exports: [BasketItemsService],
})
export class BasketItemsModule {}
