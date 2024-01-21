import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from '../../product/models/product.model';

interface StoreAttrs {
  addCount: number;
  product_id: number;
}

@Table({ tableName: 'Store' })
export class Store extends Model<Store, StoreAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '300', description: 'Add product`s count' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  addCount: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
