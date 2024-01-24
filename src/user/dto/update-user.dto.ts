import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Nabiev Ali', description: 'User`s full name' })
  @IsString()
  @IsOptional()
  full_name?: string;

  @ApiProperty({ example: '+998901112233', description: 'User`s phone numbers' })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;


}
