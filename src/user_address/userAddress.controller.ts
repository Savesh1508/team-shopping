import { UserAddress } from './models/userAddress.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserAddressService } from './userAddress.service';
import { CreateUserAddressDto } from './dto/create-userAddress.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateuserAddressDto } from './dto/update-userAddress.dto';
import { selfClientGuard } from '../guards/selfClient.guard';
import { selfAdminGuard } from '../guards/selfAdmin.guard';

@ApiTags('UserAddress')
@Controller('userAddress')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}
  @ApiOperation({ summary: 'Add comment' })
  @ApiResponse({
    status: 200,
    description: 'New  UserAddress',
    type: [UserAddress],
  })
  @Post('create')
  async create(@Body() createUserAddressDto: CreateUserAddressDto) {
    return this.userAddressService.create(createUserAddressDto);
  }

  @ApiOperation({ summary: 'View all UserAddress' })
  @ApiResponse({
    status: 200,
    description: 'List of UserAddress',
    type: [UserAddress],
  })
  // @UseGuards(selfAdminGuard)
  @Get('all')
  async findAll(): Promise<UserAddress[]> {
    return this.userAddressService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach UserAddress' })
  @ApiResponse({
    status: 200,
    description: 'UserAddress by Id',
    type: [UserAddress],
  })
  // @UseGuards(selfClientGuard)571632
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserAddress> {
    return this.userAddressService.findOne(id);
  }

  @ApiOperation({ summary: 'Update UserAddress' })
  @ApiResponse({
    status: 200,
    description: 'Updated UserAddress',
    type: [UserAddress],
  })
  // @UseGuards(selfClientGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserAddressDto: UpdateuserAddressDto,
  ): Promise<UserAddress> {
    return this.userAddressService.update(id, updateUserAddressDto);
  }

  @ApiOperation({ summary: 'Delete UserAddress' })
  @ApiResponse({
    status: 200,
    description: 'Deleted UserAddress',
    type: [UserAddress],
  })
  // @UseGuards(selfClientGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userAddressService.delete(id);
  }
}
