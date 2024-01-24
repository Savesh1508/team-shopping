import { Media } from './models/media.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateMediaDto } from './dto/update-media.dto';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}
  @ApiOperation({ summary: 'Add media' })
  @ApiResponse({ status: 200, description: 'New  Media', type: [Media] })
  @Post('create')
  async create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @ApiOperation({ summary: 'View all Media' })
  @ApiResponse({
    status: 200,
    description: 'List of Media',
    type: [Media],
  })
  @Get('all')
  async findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Media' })
  @ApiResponse({ status: 200, description: 'Media', type: Media })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Media> {
    return this.mediaService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Media' })
  @ApiResponse({ status: 200, description: 'Updated Media', type: [Media] })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTypeDto: UpdateMediaDto,
  ): Promise<Media> {
    return this.mediaService.update(id, updateTypeDto);
  }

  @ApiOperation({ summary: 'Delete Media' })
  @ApiResponse({ status: 200, description: 'Deleted Media', type: [Media] })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.mediaService.delete(id);
  }
}
