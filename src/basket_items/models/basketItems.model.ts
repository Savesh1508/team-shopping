import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Basket } from 'src/basket/models/basket.model';
import { Product } from 'src/product/models/product.model';

interface BasketItemsAttrs {
  total_price: string;
  quantity: number;
  product_id: number;
  basket_id: number;
}

@Table({ tableName: 'BasketItems' })
export class BasketItems extends Model<BasketItems, BasketItemsAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "12000 so'm",
    description: 'BasketItems total_price',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  total_price: string;

  @ApiProperty({ example: '122345', description: 'BasketItems quantity' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Basket)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  basket_id: number;

  @BelongsTo(() => Basket)
  basket: Basket;
}
