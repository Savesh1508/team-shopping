import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Apple',
    description: 'product name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '25.000.000',
    description: 'Product price',
  })
  @IsNotEmpty()
  @IsString()
  price: string;

  @ApiProperty({
    example: 'This is red apple',
    description: 'Product`s  description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: '30',
    description: 'Amount product',
  })
  @IsNotEmpty()
  @IsNumber()
  total_count: number;

  @ApiProperty({
    example: '01.01.2024',
    description: 'Date of manufacture',
  })
  @IsNotEmpty()
  @IsString()
  mfg: string;

  @ApiProperty({
    example: '1 year',
    description: 'Product expiration date',
  })
  @IsNotEmpty()
  @IsString()
  life: string;

  @ApiProperty({
    example: '8m66567',
    description: 'Product`s qr code',
  })
  @IsNotEmpty()
  @IsString()
  qr_code: string;

  @ApiProperty({
    example: '30kg',
    description: 'Product`s  value',
  })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({
    example: 'Almazar',
    description: 'Product`s  brand',
  })
  @IsNotEmpty()
  @IsString()
  brand: string;

  @ApiProperty({
    example: '5 star',
    description: 'Product`s  rate',
  })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({
    example: 'kg',
    description: 'Unit of measure',
  })
  @IsNotEmpty()
  @IsString()
  unit_of_measure: string;
}
