import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsBoolean,
  IsPhoneNumber,
} from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: 'Order name',
    description: 'Order name',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: '12.12.2024',
    description: 'Order date',
  })
  @IsNotEmpty()
  @IsDate()
  order_date: Date;

  @ApiProperty({
    example: '12.12.2024',
    description: 'Order created_at',
  })
  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @ApiProperty({
    example: 'true',
    description: 'Order status',
  })
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    example: '12234',
    description: 'Comment rating',
  })
  @IsNotEmpty()
  @IsString()
  payment_type: string;

  @ApiProperty({ example: '1', description: 'userAddres id' })
  @IsNumber()
  userAddres_id: number;

  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: '1', description: ' basket id' })
  @IsNumber()
  basket_id: number;

  @ApiProperty({ example: '1', description: 'cupon_code id' })
  @IsNumber()
  cupon_code_id: number;
}
