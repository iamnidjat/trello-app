import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dtos/userDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUserAsync(userDto: UserDto): Promise<User> {
    try{
      const existingUser = await this.usersRepository.findOne({ where: { username: userDto.username } });
      if (existingUser) {
        throw new ConflictException('User already exists with this username!');
      }

      const hashedPassword = await bcrypt.hash(userDto.password, 10); // hashes the user password
      const user = this.usersRepository.create({ username: userDto.username, email: userDto.email, password: hashedPassword }); // creates new user
      return this.usersRepository.save(user); // save the user to the db and return it
    } catch (error) {
      console.error('createUserAsync error:', error);
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async findByUsernameAsync(username: string): Promise<User | undefined> {
    try{
      return await this.usersRepository.findOne({ where: { username } });
    } catch (error) {
      console.error('findByUsernameAsync error:', error);
      throw new InternalServerErrorException('Failed to find a user');
    }
  }

  async getUserAsync(id: number) : Promise<User | undefined> {
    try{
     return await this.usersRepository.findOne({ where: { id },
      select: [
        'id',
        'username',
        'email', // select all fields excluding the password field
      ], });
    } catch (error) {
      console.error('getUserAsync error:', error);
      throw new InternalServerErrorException('Failed to get a user');
    }
  }

  async getAllUsersAsync() : Promise<User[]> {
    try{
      return await this.usersRepository.find({ select: [
        'id',
        'username',
        'email', // select all fields excluding the password field
      ], });
    } catch (error) {
      console.error('getAllUsersAsync error:', error);
      throw new InternalServerErrorException('Failed to get all users');
    }
  }

  async deleteUserAsync(id: number): Promise<void> {
    try{
      await this.usersRepository.delete(id);
    } catch (error) {
      console.error('deleteUserAsync error:', error);
      throw new InternalServerErrorException('Failed to delete a user');
    }
  } 

  async updateUserAsync(id: number, userDto: UserDto): Promise<User> {
    try{
      const user = await this.getUserAsync(id);
      if (!user) {
        throw new NotFoundException('user not found');
      }

      if (userDto.username) {
        user.username = userDto.username;
      }

      if (userDto.email) {
        user.email = userDto.email;
      }

      if (userDto.password) {
        user.password = await bcrypt.hash(userDto.password, 10); // hashes the new password
      }

      return this.usersRepository.save(user); // save the updated user to the db and return it
    } catch (error) {
      console.error('updateUserAsync error:', error);
      throw new InternalServerErrorException('Failed to update a user');
    }
  }
}