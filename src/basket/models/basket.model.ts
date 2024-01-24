import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { BasketItems } from 'src/basket_items/models/basketItems.model';
import { Order } from 'src/order/models/order.model';

interface BasketAttrs {
  created_at: Date;
  status: boolean;
  user_id: number;
}

@Table({ tableName: 'Basket' })
export class Basket extends Model<Basket, BasketAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '12.12.2024', description: 'Basket created_at' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_at: Date;

  @ApiProperty({ example: 'true', description: 'Basket is_active' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status: boolean;

  @HasMany(() => Order)
  order: Order[];

  @HasMany(() => BasketItems)
  basketItems: BasketItems[];
}
