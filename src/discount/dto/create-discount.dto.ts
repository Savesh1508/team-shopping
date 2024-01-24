import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDiscountDto {
  @ApiProperty({ example: 'Summer discount', description: 'Chegirma nomi' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '20', description: 'Chegirma foizi' })
  @IsNumber()
  @IsNotEmpty()
  readonly persentage: bigint;

  @ApiProperty({
    example: '2023-09-09',
    description: 'Chegirmani boshlangan sana',
  })
  @IsDateString()
  @IsNotEmpty()
  readonly start_date: Date;

  @ApiProperty({ example: '2023-09-20', description: 'Chegirmani tugash sana' })
  @IsDateString()
  @IsNotEmpty()
  readonly end_date: Date;
}
