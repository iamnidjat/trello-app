import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user';
import { UserColumn } from './entities/column';
import { Card } from './entities/card';
import { AuthModule } from './modules/auth.module';
import { UserColumnsController } from './controllers/user-columns/user-columns.controller';
import { UserColumnsModule } from './modules/user-columns.module';
import { UserColumnsService } from './services/user-columns/user-columns.service';
import { CardsService } from './services/cards/cards.service';
import { CommentsService } from './services/comments/comments.service';
import { CommentsModule } from './modules/comments.module';
import { CardsModule } from './modules/cards.module';
import { CardsController } from './controllers/cards/cards.controller';
import { CommentsController } from './controllers/comments/comments.controller';
import { UsersController } from './controllers/users/users.controller';
import { Comment } from './entities/comment';
import { UsersService } from './services/user-service/user-service.service';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './modules/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({ // connect database
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'admin',
    username: 'postgres',
    entities: [User, UserColumn, Card, Comment],
    database: 'mydatabase',
    synchronize: true,
    logging: true,
  }),
  AuthModule,
  UserColumnsModule,
  CommentsModule,
  CardsModule,
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
