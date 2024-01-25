import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment1 } from './models/comment.model';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: typeof Comment1);
    create(createMediaDto: CreateCommentDto): Promise<Comment1>;
    findAll(): Promise<Comment1[]>;
    findOne(id: number): Promise<Comment1>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment1>;
    delete(id: number): Promise<void>;
}
