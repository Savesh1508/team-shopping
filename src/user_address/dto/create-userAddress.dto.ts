import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserAddressDto {
  @ApiProperty({ example: 'Toshkent', description: 'Address' })
  @IsNotEmpty()
  @IsString()
  address_name: string;

  @ApiProperty({ example: 'f23t3434t2vf', description: 'Location' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ example: '12', description: 'Street' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: 'Toshkent shaxri', description: 'Region' })
  @IsNotEmpty()
  @IsString()
  region: string;

  @ApiProperty({ example: '122', description: 'Home number' })
  @IsNotEmpty()
  @IsString()
  home_number: string;

  @ApiProperty({ example: '22', description: 'Flat number' })
  @IsNotEmpty()
  @IsString()
  flat_number: string;

  @ApiProperty({ example: '123', description: 'Entrance' })
  @IsNotEmpty()
  @IsString()
  entrance: string;

  @ApiProperty({ example: '3', description: 'Floor' })
  @IsNotEmpty()
  @IsString()
  floor: string;

  @ApiProperty({ example: '1', description: 'User id' })
  @IsNumber()
  user_id: number;
}
