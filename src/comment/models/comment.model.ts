import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from 'src/product/models/product.model';

interface CommentAttrs {
  name: string;
  email: string;
  created_at: Date;
  text: string;
  rating: number;
  is_active: boolean;
  product_id: number;
  user_id: number;
}

@Table({ tableName: 'Comment' })
export class Comment1 extends Model<Comment1, CommentAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Comment name', description: 'Comment name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'comment@gmail.com', description: 'Comment email' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '12.12.2024', description: 'Comment created_at' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_at: Date;

  @ApiProperty({ example: "zo'r", description: 'Comment text' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  text: string;

  @ApiProperty({ example: '122345', description: 'Comment rated' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @ApiProperty({ example: 'true', description: 'Comment is_active' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
