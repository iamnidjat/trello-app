import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserColumnsController } from 'src/controllers/user-columns/user-columns.controller';
import { UserColumn } from 'src/entities/column';
import { UserColumnsService } from 'src/services/user-columns/user-columns.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserColumn]), 
      ],
    controllers: [UserColumnsController],
    providers: [UserColumnsService],
    exports: [UserColumnsService], 
})

export class UserColumnsModule {}

