import { Module } from '@nestjs/common';
import { discountProductService } from './discountProduct.service';
import { discountProductController } from './discountProduct.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { discountProduct } from './models/discountProduct.model';
import { Discount } from 'src/discount/models/discount.model';
import { Product } from 'src/product/models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([discountProduct, Discount, Product])],
  controllers: [discountProductController],
  providers: [discountProductService],
  exports: [discountProductService],
})
export class discountProductModule {}
