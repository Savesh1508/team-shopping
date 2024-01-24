import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { Basket } from 'src/basket/models/basket.model';
import { Comment1 } from 'src/comment/models/comment.model';
import { Order } from 'src/order/models/order.model';

interface UserAttrs {
  full_name: string;
  phone: string;
  hashed_refresh_token: string;
}

@Table({ tableName: 'User' })
export class User extends Model<User, UserAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Nabiev Ali', description: 'User`s phone number' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  full_name: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'About category',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'Token',
    description: 'User`s token',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  hashed_refresh_token: string;

  @ApiProperty({
    example: 'true',
    description: 'User`s active',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'true',
  })
  is_active: boolean;

  @HasMany(() => Comment1)
  comment: Comment1[];

  @HasMany(() => Order)
  order: Order[];

  @HasMany(() => Basket)
  basket: Basket[];
}
