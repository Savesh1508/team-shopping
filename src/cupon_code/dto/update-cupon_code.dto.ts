import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UpdateCuponCodeDto {
  @ApiProperty({ example: 'some_name', description: 'Cupon code name' })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({ example: 20, description: 'Cupon code persentage' })
  @IsNumber()
  persentage?: number;

  @ApiProperty({ example: '2024-01-19', description: 'Cupon code end date' })
  @IsDate()
  @Transform(({ value }) => new Date(value))
  end_date?: Date;
}
