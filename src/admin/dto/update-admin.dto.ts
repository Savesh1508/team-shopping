import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class UpdateAdminDto {
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

  @ApiProperty({ example: false, description: 'Super admin bo\'lishi' })
  @IsBoolean()
  @IsOptional()
  is_superAdmin?: boolean;

}
