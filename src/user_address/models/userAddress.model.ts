import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { Order } from 'src/order/models/order.model';

interface userAddressAttrs {
  address_name: string;
  location: string;
  street: string;
  region: string;
  home_number: string;
  flat_number: string;
  entrance: string;
  floor: string;
  user_id: number;
}

@Table({ tableName: 'UserAddress' })
export class UserAddress extends Model<UserAddress, userAddressAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Address' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address_name: string;

  @ApiProperty({ example: 'f23t3434t2vf', description: 'Location' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @ApiProperty({ example: '12', description: 'Street' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  street: string;

  @ApiProperty({ example: 'Toshkent shaxri', description: 'Region' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  region: string;

  @ApiProperty({ example: '122', description: 'Home number' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  home_number: string;

  @ApiProperty({ example: '22', description: 'Flat number' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  flat_number: string;

  @ApiProperty({ example: '123', description: 'Entrance' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  entrance: string;

  @ApiProperty({ example: '3', description: 'Floor' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  floor: string;

  @HasMany(() => Order)
  order: Order[];
}
