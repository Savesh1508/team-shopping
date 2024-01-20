import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'Comment name',
    description: 'Comment name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'comment@gmail.com',
    description: 'Comment email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '12.12.2024',
    description: 'Comment created_at',
  })
  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @ApiProperty({
    example: "zo'r",
    description: 'Comment text',
  })
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty({
    example: '12234',
    description: 'Comment rating',
  })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({
    example: 'true',
    description: 'Comment is_active',
  })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ example: '1', description: 'Product id' })
  product_id: number;

  @ApiProperty({ example: '1', description: 'User id' })
  user_id: number;
}
