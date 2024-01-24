import { ApiProperty } from '@nestjs/swagger';

export class CreatediscountProductDto {
  @ApiProperty({ example: '1', description: 'Product id' })
  product_id: number;

  
  @ApiProperty({ example: '1', description: 'Discount id' })
  discount_id: number;
}
