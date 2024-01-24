import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Discount } from 'src/discount/models/discount.model';
import { Product } from 'src/product/models/product.model';

interface discountProductAttrs {
  product_id: number;
  discount_id: number;
}

@Table({ tableName: 'discountProduct' })
export class discountProduct extends Model<
  discountProduct,
  discountProductAttrs
> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Discount)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  discount_id: number;

  @BelongsTo(() => Discount)
  discount: Discount;
}
