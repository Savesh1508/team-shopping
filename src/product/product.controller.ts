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
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductDto } from './dto/find-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @ApiOperation({ summary: 'Add Product' })
  @Post('create')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
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
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.productService.deleteById(+id);
  }

  @ApiOperation({ summary: 'Product edit' })
  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateById(+id, updateProductDto);
  }

  @ApiOperation({ summary: 'Search product' })
  @Post('search')
  search(@Body() findProductDto: FindProductDto) {
    return this.productService.search(findProductDto);
  }
}
