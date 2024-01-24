import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { CuponCode } from 'src/cupon_code/models/cupon_code.model';
import { Basket } from 'src/basket/models/basket.model';
import { UserAddress } from 'src/user_address/models/userAddress.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, CuponCode, Basket, UserAddress]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
