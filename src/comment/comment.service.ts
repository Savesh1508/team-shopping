import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comment1 } from './models/comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment1) private commentRepository: typeof Comment1,
  ) {}

  async create(createMediaDto: CreateCommentDto) {
    const comment = await this.commentRepository.create(createMediaDto);
    return comment;
  }

  async findAll(): Promise<Comment1[]> {
    return this.commentRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Comment1> {
    const comment = await this.commentRepository.findByPk(id);
    return comment;
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment1> {
    const builder = await this.commentRepository.update(updateCommentDto, {
      where: { id },
      returning: true,
    });
    return builder[1][0].dataValues;
  }

  async delete(id: number): Promise<void> {
    const numRowsDeleted = await this.commentRepository.destroy({
      where: { id },
    });

    if (numRowsDeleted === 0) {
      throw new Error(`Could not delete venue type with id ${id}`);
    }
  }
}
