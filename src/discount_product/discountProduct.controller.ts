import { discountProduct } from './models/discountProduct.model';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { discountProductService } from './discountProduct.service';
import { CreatediscountProductDto } from './dto/create-discountProduct.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdatediscountProductDto } from './dto/update-discountProduct.dto';

@ApiTags('discountProduct')
@Controller('discountProduct')
export class discountProductController {
  constructor(private readonly discountProductService: discountProductService) {}
  @ApiOperation({ summary: 'Add discountProduct' })
  @Post('create')
  async create(@Body() creatediscountProductDto: CreatediscountProductDto) {
    return this.discountProductService.create(creatediscountProductDto);
  }

  @ApiOperation({ summary: 'View all discountProduct' })
  @ApiResponse({
    status: 200,
    description: 'List of discountProduct',
    type: [discountProduct],
  })
  @Get('all')
  async findAll(): Promise<discountProduct[]> {
    return this.discountProductService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach discountProduct' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<discountProduct> {
    return this.discountProductService.findOne(id);
  }

  @ApiOperation({ summary: 'Update discountProduct' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatediscountProductDto: UpdatediscountProductDto,
  ): Promise<discountProduct> {
    return this.discountProductService.update(id, updatediscountProductDto);
  }

  @ApiOperation({ summary: 'Delete discountProduct' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.discountProductService.delete(id);
  }
}
