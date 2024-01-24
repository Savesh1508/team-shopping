import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Nabiev Ali', description: 'User`s full name' })
  @IsString()
  full_name?: string;

  @ApiProperty({
    example: '+998911234567',
    description: 'User`s phone number',
  })
  @IsPhoneNumber()
  phone?: string;
}
