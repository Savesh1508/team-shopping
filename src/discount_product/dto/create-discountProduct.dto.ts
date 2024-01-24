import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatediscountProductDto {
  @ApiProperty({ example: '1', description: 'Product id' })
  @IsNumber()
  product_id: number;

  @ApiProperty({ example: '1', description: 'Discount id' })
  @IsNumber()
  discount_id: number;
}
