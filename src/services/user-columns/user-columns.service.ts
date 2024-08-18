import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserColumnDto } from 'src/dtos/columnDto';
import { UserColumn } from 'src/entities/column';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserColumnsService {
    constructor(
        @InjectRepository(UserColumn)
        private userColumnsRepository: Repository<UserColumn>,
      ) {}
    
      async createUserColumnAsync(userColumnDto: UserColumnDto): Promise<UserColumn> {
        try {
          const userColumn = this.userColumnsRepository.create({ 
              title: userColumnDto.title,
              positionInBoard: userColumnDto.positionInBoard,
              createdAt: userColumnDto.createdAt,
              updatedAt: userColumnDto.updatedAt,
              user: { id: userColumnDto.userId } as User, // associate with user
          }); // creates new user column
          return this.userColumnsRepository.save(userColumn); // save the user column to the db and return it
        } catch (error) {
          console.error('createUserColumnAsync error:', error);
          throw new InternalServerErrorException('Failed to create a user column');
        }
      }

      async getAllUserColumnsAsync(userId: number): Promise<UserColumn[]> {
        try {
          return await this.userColumnsRepository.find({
            where: { user: { id: userId } }, // filter columns by userId
          });
        } catch (error) {
          console.error('getAllUserColumnsAsync error:', error);
          throw new InternalServerErrorException('Failed to get user columns');
        }
      }

      async getUserColumnAsync(id: number): Promise<UserColumn | undefined> {
        try {
          return await this.userColumnsRepository.findOne({ where: {id} });
        } catch (error) {
          console.error('getUserColumnAsync error:', error);
          throw new InternalServerErrorException('Failed to get a user column');
        }
      }

      async deleteUserColumnAsync(id: number): Promise<void> {
        try {
            await this.userColumnsRepository.delete(id);
          } catch (error) {
            console.error('deleteUserColumnAsync error:', error);
            throw new InternalServerErrorException('Failed to delete a user column');
          }
        }

        async updateUserColumnAsync(id: number, userColumnDto: UserColumnDto): Promise<UserColumn> {
          try {
          const userColumn = await this.getUserColumnAsync(id);
          if (!userColumn) {
            throw new NotFoundException('user column was not found');
          }
      
          if (userColumnDto.title) {
            userColumn.title = userColumnDto.title;
          }
      
          if (userColumnDto.positionInBoard) {
            userColumn.positionInBoard = userColumnDto.positionInBoard;
          }

          if (userColumnDto.createdAt) {
            userColumn.createdAt = userColumnDto.createdAt;
          }

          if (userColumnDto.updatedAt) {
            userColumn.updatedAt = userColumnDto.updatedAt;
          }
      
          return this.userColumnsRepository.save(userColumn); // save the updated user column to the db and return it
        } catch (error) {
          console.error('updateUserColumnAsync error:', error);
          throw new InternalServerErrorException('Failed to update a user column');
        }
      }
}


