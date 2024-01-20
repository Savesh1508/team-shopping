import { Module } from '@nestjs/common';
import { BasketItemsService } from './basketItems.service';
import { BasketItemsController } from './basketItems.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketItems } from './models/basketItems.model';

@Module({
  imports: [SequelizeModule.forFeature([BasketItems])],
  controllers: [BasketItemsController],
  providers: [BasketItemsService],
  exports: [BasketItemsService],
})
export class BasketItemsModule {}
