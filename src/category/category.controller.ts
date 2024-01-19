import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './models/category.model';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @ApiOperation({ summary: 'Add category' })
  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFile() image: any,
  ) {
    return this.categoryService.create(createCategoryDto, image);
  }

  @ApiOperation({ summary: 'View all categories' })
  @ApiResponse({
    status: 200,
    description: 'List of categories',
    type: [Category],
  })
  @Get('all')
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @ApiOperation({ summary: 'View category by id' })
  @ApiResponse({ status: 200, description: 'Category', type: Category })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findById(+id);
  }

  @ApiOperation({ summary: 'Delete Category' })
  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<number> {
    return this.categoryService.deleteById(+id);
  }
}
