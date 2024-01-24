import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Store } from './models/store.model';
import { JwtModule } from '@nestjs/jwt';
import { Product } from 'src/product/models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Store, Product]), JwtModule],
  controllers: [StoreController],
  providers: [StoreService],
  exports: [StoreService],
})
export class StoreModule {}
