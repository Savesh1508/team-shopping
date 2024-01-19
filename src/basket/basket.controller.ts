import { Basket } from './models/basket.model';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateBasketDto } from './dto/update-basket.dto';

@ApiTags('Basket')
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}
  @ApiOperation({ summary: 'Add Basket' })
  @Post('create')
  async create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto);
  }

  @ApiOperation({ summary: 'View all Basket' })
  @ApiResponse({
    status: 200,
    description: 'List of Basket',
    type: [Basket],
  })
  @Get('all')
  async findAll(): Promise<Basket[]> {
    return this.basketService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Basket' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Basket> {
    return this.basketService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Basket' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBasketDto: UpdateBasketDto,
  ): Promise<Basket> {
    return this.basketService.update(id, updateBasketDto);
  }

  @ApiOperation({ summary: 'Delete Basket' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.basketService.delete(id);
  }
}
