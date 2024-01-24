import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBasketItemsDto {
  @ApiProperty({
    example: "12000 so'm",
    description: 'Product total_price',
  })
  @IsNotEmpty()
  @IsString()
  total_price: string;

  @ApiProperty({
    example: '12',
    description: 'Product quantity',
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: '1', description: 'Product id' })
  @IsNumber()
  product_id: number;

  @ApiProperty({ example: '1', description: 'Basket id' })
  @IsNumber()
  basket_id: number;
}
