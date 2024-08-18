import { CommentDto } from 'src/dtos/commentDto';
import { Comment } from 'src/entities/comment';
import { CommentsService } from 'src/services/comments/comments.service';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    createCommentAsync(userId: number, columnId: number, cardId: number, commentDto: CommentDto): Promise<Comment>;
    getAllCommentsAsync(userId: number, columnId: number, cardId: number): Promise<Comment[]>;
    getCommentAsync(userId: number, columnId: number, cardId: number, commentId: number): Promise<Comment>;
    deleteCommentAsync(userId: number, columnId: number, cardId: number, commentId: number): Promise<void>;
    updateCommentAsync(userId: number, columnId: number, cardId: number, commentId: number, body: CommentDto): Promise<Comment>;
}
