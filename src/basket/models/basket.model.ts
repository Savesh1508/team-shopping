import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

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
}
