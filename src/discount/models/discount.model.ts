import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { discountProduct } from 'src/discount_product/models/discountProduct.model';

interface DiscountCretionAttrs {
  name: string;
  persentage: bigint;
  start_date: Date;
  end_date: Date;
}

@Table({ tableName: 'discount' })
export class Discount extends Model<Discount, DiscountCretionAttrs> {
  @ApiProperty({ example: '1', description: 'Unical Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Summer discount', description: 'Chegirma nomi' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: '20', description: 'Chegirma foizi' })
  @Column({
    type: DataType.BIGINT,
  })
  persentage: bigint;

  @ApiProperty({
    example: '09-09-2023',
    description: 'Chegirmani boshlangan sana',
  })
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @ApiProperty({ example: '20-09-2023', description: 'Chegirmani tugash sana' })
  @Column({
    type: DataType.DATE,
  })
  end_date: Date;

  @HasMany(() => discountProduct)
  discount_product: discountProduct[];
}
