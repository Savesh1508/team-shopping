import {
    Injectable,
  } from '@nestjs/common';
  import { CreateCommentDto } from './dto/create-comment.dto';
  import { UpdateCommentDto} from './dto/update-comment.dto';
  import { InjectModel } from '@nestjs/sequelize';
  import { Comment } from './models/comment.model';
  
  @Injectable()
  export class CommentService {
    constructor(
      @InjectModel(Comment) private commentRepository: typeof Comment
    ) {}
  
    async create(createMediaDto: CreateCommentDto) {
      const media = await this.commentRepository.create(createMediaDto);
      return media;
    }
  
    async findAll(): Promise<Comment[]> {
      return this.commentRepository.findAll();
    }
  
    async findOne(id: number): Promise<Comment> {
      const media = await this.commentRepository.findByPk(id);
      return media;
    }

    async update(
        id: number,
        updateCommentDto: UpdateCommentDto,
      ): Promise<Comment> {
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
  