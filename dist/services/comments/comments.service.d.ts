import { Comment } from 'src/entities/comment';
import { CommentDto } from 'src/dtos/commentDto';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comment>);
    createCommentAsync(commentDto: CommentDto): Promise<Comment>;
    getAllCommentsAsync(cardId: number): Promise<Comment[]>;
    getCommentAsync(id: number): Promise<Comment | undefined>;
    deleteCommentAsync(id: number): Promise<void>;
    updateCommentAsync(id: number, commentDto: CommentDto): Promise<Comment>;
}
