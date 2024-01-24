import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: '+998911234567',
    description: 'User`s phone number',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
}
