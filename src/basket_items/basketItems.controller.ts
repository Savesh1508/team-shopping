import { BasketItems } from './models/basketItems.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BasketItemsService } from './basketItems.service';
import { CreateBasketItemsDto } from './dto/create-basketItems.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateBasketItemsDto } from './dto/update-basketItems.dto';

@ApiTags('BasketItems')
@Controller('basketItems')
export class BasketItemsController {
  constructor(private readonly basketItemsService: BasketItemsService) {}
  @ApiOperation({ summary: 'Add BasketItems' })
  @ApiResponse({
    status: 200,
    description: 'New  BasketItems',
    type: [BasketItems],
  })
  @Post('create')
  async create(@Body() createBasketItemsDto: CreateBasketItemsDto) {
    return this.basketItemsService.create(createBasketItemsDto);
  }

  @ApiOperation({ summary: 'View all BasketItems' })
  @ApiResponse({
    status: 200,
    description: 'List of BasketItems',
    type: [BasketItems],
  })
  @Get('all')
  async findAll(): Promise<BasketItems[]> {
    return this.basketItemsService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach BasketItems' })
  @ApiResponse({
    status: 200,
    description: 'BasketItems by Id',
    type: [BasketItems],
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BasketItems> {
    return this.basketItemsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update BasketItems' })
  @ApiResponse({
    status: 200,
    description: 'Updated BasketItems',
    type: [BasketItems],
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBasketItemsDto: UpdateBasketItemsDto,
  ): Promise<BasketItems> {
    return this.basketItemsService.update(id, updateBasketItemsDto);
  }

  @ApiOperation({ summary: 'Delete BasketItems' })
  @ApiResponse({
    status: 200,
    description: 'Deleted BasketItems',
    type: [BasketItems],
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.basketItemsService.delete(id);
  }
}
