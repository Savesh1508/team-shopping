import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/order/models/order.model';

interface CuponCodeAttributes {
  name: string;
  persentage: number;
  end_date: Date;
}

@Table({ tableName: 'CuponCode' })
export class CuponCode extends Model<CuponCode, CuponCodeAttributes> {
  @ApiProperty({ example: 1, description: 'Unique Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'some_name', description: 'Cupon code name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 20, description: 'Cupon code persentage' })
  @Column({
    type: DataType.INTEGER,
  })
  persentage: number;

  @ApiProperty({ example: '2024-01-19', description: 'Cupon code end date' })
  @Column({
    type: DataType.DATEONLY,
  })
  end_date: Date;

  @HasMany(() => Order)
  order: Order[];
}
