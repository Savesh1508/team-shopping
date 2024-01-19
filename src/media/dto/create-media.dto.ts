import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMediaDto {
  @ApiProperty({
    example: 'data:image/jpeg;base64,/9j',
    description: 'Media link',
  })
  @IsNotEmpty()
  @IsString()
  media_link: string;

  @ApiProperty({ example: '1', description: 'Product id' })
  product_id: number;
}
