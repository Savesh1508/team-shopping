import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStoreDto {
  @ApiProperty({
    example: '300',
    description: 'Add product`s count',
  })
  @IsNotEmpty()
  @IsNumber()
  addCount: number;

  product_id: number;
}
