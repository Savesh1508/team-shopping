import { Comment1 } from './models/comment.model';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<Comment1>;
    findAll(): Promise<Comment1[]>;
    findOne(id: number): Promise<Comment1>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment1>;
    delete(id: number): Promise<void>;
}
