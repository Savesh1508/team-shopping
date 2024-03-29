import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment1 } from './models/comment.model';
import { Product } from 'src/product/models/product.model';
import { User } from 'src/user/models/user.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Comment1, Product, User]),
    JwtModule.register({}),
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
