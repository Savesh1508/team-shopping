import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface AdminAttrs {
  last_name: string;
  first_name: string;
  phone: string;
  address: string;
  password: string;
  email: string;
  is_active: boolean;
  hashed_refresh_token: string;
  is_superAdmin: boolean;
}

@Table({ tableName: 'Admin' })
export class Admin extends Model<Admin, AdminAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal Id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'Admin ismi' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ example: 'Smith', description: 'Admin familiyasi' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({ example: 'admin@mail.uz', description: 'Admin email' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;

  @ApiProperty({ example: 'Uzbek!$t0n', description: 'Admin paroli' })
  @Column({
    type: DataType.STRING,
  })
  password: string;

  @ApiProperty({ example: 'chilonzor', description: 'Admin manzili' })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @ApiProperty({
    example: '+998881112233',
    description: 'Admin telefon nomeri',
  })
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: 'ture',
    description: "Admin super adminmi yoki yo'q",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: 'false',
  })
  is_superAdmin: boolean;

  @ApiProperty({ example: 'false', description: 'Admin activligi' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @ApiProperty({
    example: 'dsf7787cvnc9s_kjsjfndf7',
    description: 'Admin hashed refresh tokeni',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
