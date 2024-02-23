import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { UpdateProductDto } from './dto/update-product.dto';
import { AdminGuard } from '../guards/admin.guard';
import { SelectDto } from '../admin/dto/select_limit.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Add Product' })
  @ApiResponse({ status: 200, description: 'New  Product', type: [Product] })
  @UseGuards(AdminGuard)
  @Post('create')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @ApiOperation({ summary: 'Search product' })
  @Get('search')
  search(
    @Query('name') name: string,
    @Query('price') price: string,
    @Query('qr_code') qr_code: string,
    @Query('brand') brand: string,
  ) {
    return this.productService.search({ name, price, qr_code, brand });
  }

  
  @ApiOperation({summary: 'Find limited products'})
  @ApiResponse({status: 200, type: [Product]})
  @Post('limit/product')
  select_limit_product(
    @Body() selectDto: SelectDto
  ): Promise<Object> {
    return this.productService.limit_product(selectDto);
  }

  @ApiOperation({ summary: 'View all products' })
  @ApiResponse({
    status: 200,
    description: 'List of products',
    type: [Product],
  })
  @Get('all')
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @ApiOperation({ summary: 'View product by id' })
  @ApiResponse({ status: 200, description: 'Product', type: Product })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({ status: 200, description: 'Deleted Product', type: [Product] })
  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.productService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Product edit' })
  @ApiResponse({ status: 200, description: 'Updated Product', type: [Product] })
  @UseGuards(AdminGuard)
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateById(+id, updateProductDto);
  }

  
}
