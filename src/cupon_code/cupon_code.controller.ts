import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
  HttpCode,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { CuponCodeService } from './cupon_code.service';
import { CreateCuponCodeDto } from './dto/create-cupon_code.dto';
import { UpdateCuponCodeDto } from './dto/update-cupon_code.dto';
import { CuponCode } from './models/cupon_code.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Cupon_codes')
@Controller('cupon_code')
export class CuponCodeController {
  constructor(private readonly cuponCodeService: CuponCodeService) {}
  @ApiOperation({ summary: 'Create cupon code' })
  @ApiResponse({
    status: 200,
    description: 'New cupon code',
    type: [CuponCode],
  })
  @Post('create')
  async createCuponCode(
    @Body() createCuponCodeDto: CreateCuponCodeDto,
  ): Promise<CuponCode> {
    const cupon_code =
      await this.cuponCodeService.createCuponCode(createCuponCodeDto);
    return cupon_code;
  }

  @ApiOperation({ summary: 'Get all cupon codes' })
  @ApiResponse({
    status: 200,
    description: 'List of cupon codes',
    type: [CuponCode],
  })
  @Get('all')
  async getAllCuponCodes(): Promise<CuponCode[]> {
    const cupon_codes = await this.cuponCodeService.getAllCuponCodes();
    return cupon_codes;
  }

  @ApiOperation({ summary: 'Get cupon code by Id' })
  @ApiResponse({
    status: 200,
    description: 'Cupon code by Id',
    type: [CuponCode],
  })
  @Get(':id')
  async getCuponCodeById(@Param('id') id: string): Promise<CuponCode> {
    const cupon_code = await this.cuponCodeService.getCuponCodeById(+id);
    return cupon_code;
  }

  @ApiOperation({ summary: 'Update cupon code by Id' })
  @ApiResponse({
    status: 200,
    description: 'Updated cupon code',
    type: [CuponCode],
  })
  @Put(':id')
  async updateCuponCodeById(
    @Param('id') id: string,
    @Body() updateComanyDto: UpdateCuponCodeDto,
  ): Promise<CuponCode> {
    const cupon_code = await this.cuponCodeService.updateCuponCodeById(
      +id,
      updateComanyDto,
    );
    return cupon_code;
  }

  @ApiOperation({ summary: 'Delete cupon code by Id' })
  @ApiResponse({
    status: 200,
    description: 'Deleted cupon code',
    type: [CuponCode],
  })
  @Delete(':id')
  async deleteServiceById(@Param('id') id: string) {
    const cupon_code = await this.cuponCodeService.deleteCuponCodeById(+id);
    return cupon_code;
  }
}
