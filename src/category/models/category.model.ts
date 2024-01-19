import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { Product } from '../../product/models/product.model';

interface CategoryAttrs {
  name: string;
  decsription: string;
  image: string;
}

@Table({ tableName: 'Category' })
export class Category extends Model<Category, CategoryAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Fruits', description: 'Category name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'This is red apple',
    description: 'About category',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 'image.jpg',
    description: 'Category`s image',
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @HasMany(() => Product)
  product: Product[];
}
