import { UserRoles } from './roles/models/user-roles.model';
import { CuponCode } from './cupon_code/models/cupon_code.model';
import { CuponCodeModule } from './cupon_code/cupon_code.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { CategoryModule } from './category/category.module';
import { Media } from './media/models/media.model';
import { MediaModule } from './media/media.module';
import { Category } from './category/models/category.model';
import { DiscountModule } from './discount/discount.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/models/product.model';
import { Comment1 } from './comment/models/comment.model';
import { Basket } from './basket/models/basket.model';
import { BasketModule } from './basket/basket.module';
import { Discount } from './discount/models/discount.model';
import { CommentModule } from './comment/comment.module';
import { BasketItems } from './basket_items/models/basketItems.model';
import { BasketItemsModule } from './basket_items/basketItems.module';
import { UserAddress } from './user_address/models/userAddress.model';
import { UserAddressModule } from './user_address/userAddress.module';
import { StoreModule } from './store/store.module';
import { Store } from './store/models/store.model';
import { AdminModule } from './admin/admin.module';
import { discountProduct } from './discount_product/models/discountProduct.model';
import { discountProductModule } from './discount_product/discountProduct.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/models/order.model';
import { Role } from './roles/models/role.model';
import { AdminRoles } from './roles/models/admin-roles.model';
import { RolesModule } from './roles/roles.module';
import { Admin } from './admin/models/admin.model';
import { UserModule } from './user/user.module';
import { OtpModule } from './otp/otp.module';
import { SmsModule } from './sms/sms.module';
import { User } from './user/models/user.model';
import { Otp } from './otp/model/otp.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        CuponCode,
        Category,
        Media,
        Basket,
        Discount,
        Product,
        Comment1,
        BasketItems,
        UserAddress,
        Store,
        discountProduct,
        Order,
        Role,
        UserRoles,
        AdminRoles,
        User,
        Otp,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    UserModule,
    CuponCodeModule,
    MediaModule,
    FilesModule,
    CategoryModule,
    ProductModule,
    BasketModule,
    DiscountModule,
    CommentModule,
    StoreModule,
    BasketItemsModule,
    UserAddressModule,
    AdminModule,
    discountProductModule,
    OrderModule,
    RolesModule,
    OtpModule,
    SmsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
