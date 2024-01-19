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
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/models/comment.model';
import { DiscountModule } from './discount/discount.module';
import { AdminModule } from './admin/admin.module';

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
        CuponCode,
        Category,
        Media,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    CuponCodeModule,
    MediaModule,
    FilesModule,
    CategoryModule,
    DiscountModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
