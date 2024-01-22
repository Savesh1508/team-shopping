import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Nabiev Ali', description: 'User`s full name' })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({
    example: '+998911234567',
    description: 'User`s phone number',
  })
  @IsString()
  phone: string;
}
