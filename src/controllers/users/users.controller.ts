import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from '../../entities/user';
import { UsersService } from 'src/services/user-service/user-service.service';
import { UserDto } from 'src/dtos/userDto';
import { UserGuard } from 'src/guards/user-guard/user-guard.guard';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('users') // for grouping endpoints in Swagger
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get('/users/:userId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'get user by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiResponse({ status: 200, description: 'user was found.' })
    @ApiResponse({ status: 404, description: 'user was not found.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    async getUserAsync(
        @Param('userId', new ParseIntPipe({
          errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
        }))
        userId: number) {
        return this.userService.getUserAsync(userId);
    }

    @Get("/users")
    @ApiOperation({ summary: 'get all users' })
    @ApiResponse({ status: 200, description: 'users were found.' })
    @ApiResponse({ status: 404, description: 'users were not found.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    async getAllUsersAsync(): Promise<User[]> {
      return this.userService.getAllUsersAsync();
    }

    @Delete('/users/:userId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'update user by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiResponse({ status: 200, description: 'user was successfully updated.' })
    @ApiResponse({ status: 404, description: 'user was not found.' })
    @ApiResponse({ status: 400, description: 'invalid user id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async deleteUserAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number
    ): Promise<void> {
        await this.userService.deleteUserAsync(userId);
    }

    @Patch('/users/:userId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'update user by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiResponse({ status: 200, description: 'user was successfully updated.' })
    @ApiResponse({ status: 404, description: 'user was not found.' })
    @ApiResponse({ status: 400, description: 'invalid user id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async updateUserAsync(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number, 
    @Body() body: UserDto
    ): Promise<User> {
        return await this.userService.updateUserAsync(userId, body);
    }
}
