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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './models/store.model';
import { UpdateStoreDto } from './dto/update-store.dto';

@ApiTags('Store')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}
  @ApiOperation({ summary: 'Add Product`s count' })
  @ApiResponse({ status: 200, description: 'New  Store', type: [Store] })
  @Post('create')
  async createStore(@Body() createStoreDto: CreateStoreDto): Promise<Store> {
    return this.storeService.createStore(createStoreDto);
  }

  @ApiOperation({ summary: 'View all in store' })
  @ApiResponse({
    status: 200,
    description: 'List of products in store',
    type: [Store],
  })
  @Get('all')
  async findAll(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @ApiOperation({ summary: 'View product in store by id' })
  @ApiResponse({ status: 200, description: 'Store', type: Store })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Store> {
    return this.storeService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete product in store' })
  @ApiResponse({ status: 200, description: 'Deleted Store', type: [Store] })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.storeService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Store  edit' })
  @ApiResponse({ status: 200, description: 'Updated Store', type: [Store] })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
  ) {
    return this.storeService.updateById(+id, updateStoreDto);
  }
}
