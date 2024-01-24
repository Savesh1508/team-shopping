import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Discount } from './models/discount.model';

@ApiTags('Discount')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @ApiOperation({ summary: 'Add discount by Admin' })
  @ApiResponse({ status: 200, description: 'New  Discount', type: [Discount] })
  @Post('create')
  create(@Body() createDiscountDto: CreateDiscountDto): Promise<Discount> {
    return this.discountService.createDiscount(createDiscountDto);
  }

  @ApiOperation({ summary: 'list of discounts' })
  @ApiResponse({ status: 200, type: Discount })
  @Get('all')
  findAll(): Promise<Discount[]> {
    return this.discountService.findAllDiscount();
  }

  @ApiOperation({ summary: 'View discount by id' })
  @ApiResponse({ status: 200, type: Discount })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Discount> {
    return this.discountService.findOneDiscount(+id);
  }

  @ApiOperation({ summary: 'update discount by id by Admin' })
  @ApiResponse({ status: 201, type: Discount })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ): Promise<Discount[]> {
    return this.discountService.updateDiscount(+id, updateDiscountDto);
  }

  @ApiOperation({ summary: 'delete discount by id by Admin' })
  @ApiResponse({
    status: 200,
    description: 'Deleted Discount',
    type: [Discount],
  })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.discountService.removeDiscount(+id);
  }
}
