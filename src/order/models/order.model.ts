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
import { CuponCode } from 'src/cupon_code/models/cupon_code.model';
import { UserAddress } from 'src/user_address/models/userAddress.model';

interface OrderAttrs {
  phone: string;
  order_date: Date;
  created_at: Date;
  status: boolean;
  payment_type: string;

  userAddres_id: number;
  basket_id: number;
  user_id: number;
  cupon_code_id: number;
}

@Table({ tableName: 'Order' })
export class Order extends Model<Order, OrderAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '+998123456789', description: 'Order phone number' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: '12.12.2024', description: 'Order date' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  order_date: Date;

  @ApiProperty({ example: '12.12.2024', description: 'Comment created_at' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_at: Date;

  @ApiProperty({ example: 'true', description: 'Order status' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status: boolean;

  @ApiProperty({ example: 'karta', description: 'Order payment type' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_type: string;

  @ForeignKey(() => UserAddress)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  userAddres_id: number;

  @BelongsTo(() => UserAddress)
  userAddres: UserAddress;

  @ForeignKey(() => Basket)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  basket_id: number;

  @BelongsTo(() => Basket)
  basket: Basket;

  @ForeignKey(() => CuponCode)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  cupon_code_id: number;

  @BelongsTo(() => CuponCode)
  cupon_code: CuponCode;
}
