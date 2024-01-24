import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

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
    allowNull: false,
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
    allowNull: false,
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
}
