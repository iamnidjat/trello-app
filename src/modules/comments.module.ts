import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from 'src/controllers/comments/comments.controller';
import { Comment } from 'src/entities/comment';
import { CommentsService } from 'src/services/comments/comments.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Comment]), 
    ],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [CommentsService],
})
export class CommentsModule {}
