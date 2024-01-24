import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MinLength,
  isEmail,
  IsOptional,
} from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @ApiProperty({ example: 'salima', description: 'Admin ismi' })
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({ example: 'salimova', description: 'Admin familiyasi' })
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({ example: 'chilonzor 11', description: 'Admin manzili' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'Uzbek1$t0n', description: 'Admin paroli' })
  @IsStrongPassword()
  @MinLength(4)
  @IsOptional()
  password?: string;

  @ApiProperty({ example: 'salima@mail.uz', description: 'Admin emaili' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: '+998881112233',
    description: 'Admin telefon raqami',
  })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;
}
