import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

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

  @ApiProperty({ example: "12000 so'm", description: 'BasketItems total_price' })
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
}
