import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateBasketDto {
  @ApiProperty({
    example: '12.12.2024',
    description: 'Basket created_at',
  })
  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @ApiProperty({
    example: 'true',
    description: 'Basket is_active',
  })
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber()
  user_id: number;
}
