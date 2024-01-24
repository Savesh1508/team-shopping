import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDiscountDto } from './create-discount.dto';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {
  @ApiProperty({ example: 'Summer discount', description: 'Chegirma nomi' })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ example: '20', description: 'Chegirma foizi' })
  @IsNumber()
  @IsOptional()
  readonly persentage?: bigint;

  @ApiProperty({
    example: '09-09-2023',
    description: 'Chegirmani boshlangan sana',
  })
  @IsDateString()
  @IsOptional()
  readonly start_date?: Date;

  @ApiProperty({ example: '20-09-2023', description: 'Chegirmani tugash sana' })
  @IsDateString()
  @IsOptional()
  readonly end_date?: Date;
}
