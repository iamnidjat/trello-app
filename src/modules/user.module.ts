import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users/users.controller';
import { User } from 'src/entities/user';
import { UsersService } from 'src/services/user-service/user-service.service';

@Module({
    imports: [
    TypeOrmModule.forFeature([User]), 
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService], 
})
export class UserModule {}
