import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment';
import { CommentDto } from 'src/dtos/commentDto';
import { Repository } from 'typeorm';
import { Card } from 'src/entities/card';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentsRepository: Repository<Comment>,
      ) {}
    
      async createCommentAsync(commentDto: CommentDto): Promise<Comment> {
        try {
          const comment = this.commentsRepository.create({ 
              content: commentDto.content,
              createdAt: commentDto.createdAt,
              updatedAt: commentDto.updatedAt,
              card: { id: commentDto.cardId } as Card, // associate with card
          }); // creates new comment column
          return this.commentsRepository.save(comment); // save the comment to the db and return it
        } catch (error) {
          console.error('createCommentAsync error:', error);
          throw new InternalServerErrorException('Failed to create a comment');
       }
      }

      async getAllCommentsAsync(cardId: number): Promise<Comment[]> {
        try {
          return await this.commentsRepository.find({
            where: { card: { id: cardId } }, // filter columns by cardId
          });
        } catch (error) {
          console.error('getAllCommentsAsync error:', error);
          throw new InternalServerErrorException('Failed to get comments');
        }
      }

      async getCommentAsync(id: number): Promise<Comment | undefined> {
        try {
          return await this.commentsRepository.findOne({ where: {id} });
        } catch (error) {
          console.error('getCommentAsync error:', error);
          throw new InternalServerErrorException('Failed to get a comment');
        }
      }

      async deleteCommentAsync(id: number): Promise<void> {
        try {
          await this.commentsRepository.delete(id);
        } catch (error) {
          console.error('deleteCommentAsync error:', error);
          throw new InternalServerErrorException('Failed to delete a comment');
        }
      }

      async updateCommentAsync(id: number, commentDto: CommentDto): Promise<Comment> {
        try {
          const comment = await this.getCommentAsync(id);
          if (!comment) {
            throw new NotFoundException('comment was not found');
          }
      
          if (comment.content) {
            comment.content = comment.content;
          }

          if (comment.createdAt) {
            comment.createdAt = comment.createdAt;
          }

          if (comment.updatedAt) {
            comment.updatedAt = comment.updatedAt;
          }
      
          return this.commentsRepository.save(comment); // save the updated comment to the db and return it
        } catch (error) {
          console.error('updateCommentAsync error:', error);
          throw new InternalServerErrorException('Failed to update a comment');
        }
      }
}
