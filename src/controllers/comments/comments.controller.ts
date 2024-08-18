import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, UseGuards, Patch, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CommentDto } from 'src/dtos/commentDto';
import { Comment } from 'src/entities/comment';
import { UserGuard } from 'src/guards/user-guard/user-guard.guard';
import { CommentsService } from 'src/services/comments/comments.service';

@ApiTags('comments') // for grouping endpoints in Swagger
@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Post('/users/:userId/columns/:columnId/cards/:cardId/comments')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'creating new comment' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiResponse({ status: 201, description: 'comment was created.' })
    @ApiResponse({ status: 400, description: 'invalid data.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async createCommentAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number, 
        @Body() commentDto: CommentDto
        ): Promise<Comment> {
        return this.commentsService.createCommentAsync(commentDto);
    }
    
    @Get('/users/:userId/columns/:columnId/cards/:cardId/comments')
    @ApiOperation({ summary: 'get all comments' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiResponse({ status: 200, description: 'comments were found.' })
    @ApiResponse({ status: 404, description: 'comments were not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async getAllCommentsAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number
    ): Promise<Comment[]> {
        return await this.commentsService.getAllCommentsAsync(cardId);
    }

    @Get('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'get comment by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiParam({ name: 'commentId', required: true, description: 'comment id' })
    @ApiResponse({ status: 200, description: 'comment was found.' })
    @ApiResponse({ status: 404, description: 'comment was not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async getCommentAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number, 
        @Param('commentId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))commentId: number
        ): Promise<Comment> {
        return await this.commentsService.getCommentAsync(commentId);
    }

    @Delete('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'delete comment by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiParam({ name: 'commentId', required: true, description: 'comment id' })
    @ApiResponse({ status: 200, description: 'comment was successfully updated.' })
    @ApiResponse({ status: 404, description: 'comment was not found.' })
    @ApiResponse({ status: 400, description: 'invalid comment id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async deleteCommentAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number, 
        @Param('commentId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))commentId: number
    ): Promise<void> {
        await this.commentsService.deleteCommentAsync(commentId);
    }

    @Patch('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'update comment by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiParam({ name: 'commentId', required: true, description: 'comment id' })
    @ApiResponse({ status: 200, description: 'comment was successfully updated.' })
    @ApiResponse({ status: 404, description: 'comment was not found.' })
    @ApiResponse({ status: 400, description: 'invalid comment id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async updateCommentAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number, 
        @Param('commentId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))commentId: number, 
        @Body() body: CommentDto
    ): Promise<Comment> {
        return await this.commentsService.updateCommentAsync(commentId, body);
    }
}

