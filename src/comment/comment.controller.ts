import { Comment1 } from './models/comment.model';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('Comment1')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @ApiOperation({ summary: 'Add comment' })
  @ApiResponse({ status: 200, description: 'New  Comment1', type: [Comment1] })
  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @ApiOperation({ summary: 'View all Comment' })
  @ApiResponse({
    status: 200,
    description: 'List of Comment',
    type: [Comment1],
  })
  @Get('all')
  async findAll(): Promise<Comment1[]> {
    return this.commentService.findAll();
  }

  @ApiOperation({ summary: 'Id Serach Comment' })
  @ApiResponse({ status: 200, description: 'Comment1 by Id', type: [Comment1] })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Comment1> {
    return this.commentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Comment' })
  @ApiResponse({
    status: 200,
    description: 'Updated Comment1',
    type: [Comment1],
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<Comment1> {
    return this.commentService.update(id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete Comment' })
  @ApiResponse({
    status: 200,
    description: 'Deleted Comment',
    type: [Comment1],
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.commentService.delete(id);
  }
}
