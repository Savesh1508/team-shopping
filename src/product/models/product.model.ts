import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Category } from '../../category/models/category.model';
import { Store } from '../../store/models/store.model';
import { discountProduct } from 'src/discount_product/models/discountProduct.model';
import { BasketItems } from 'src/basket_items/models/basketItems.model';
import { Media } from 'src/media/models/media.model';
import { Comment1 } from 'src/comment/models/comment.model';

interface ProductAttrs {
  name: string;
  price: string;
  description: string;
  total_count: number;
  mfg: string;
  life: string;
  qr_code: string;
  value: string;
  brand: string;
  rating: number;
  unit_of_measure: string;
}

@Table({ tableName: 'Product' })
export class Product extends Model<Product, ProductAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Apple', description: 'Product`s name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'This is red apple',
    description: 'Product`s description',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: '25.000.000',
    description: 'Product`s price',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @ApiProperty({
    example: '30',
    description: 'Amount product',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  total_count: number;

  @ApiProperty({
    example: '01.01.2014',
    description: 'Date of manufacture',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mfg: string;

  @ApiProperty({
    example: '1 year',
    description: 'Product expiration date',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  life: string;

  @ApiProperty({
    example: '8m66567',
    description: 'Product`s qr code',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  qr_code: string;

  @ApiProperty({
    example: '30kg',
    description: 'Product`s value',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: 'Almazar',
    description: 'Product`s brand',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand: string;

  @ApiProperty({
    example: '5 star',
    description: 'Product`s rating',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @ApiProperty({
    example: 'true',
    description: 'Product`s active',
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: 'true',
  })
  is_active: boolean;

  @ApiProperty({
    example: 'kg',
    description: 'Unit of measure',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  unit_of_measure: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Store)
  store: Store[];

  @HasMany(() => discountProduct)
  discount_product: discountProduct[];

  @HasMany(() => BasketItems)
  basketItems: BasketItems[];

  @HasMany(() => Media)
  media: Media[];

  @HasMany(() => Comment1)
  comment: Comment1[];
}
