import { 
    Body, Controller, Post, Get, UseGuards, Param, ParseIntPipe, HttpStatus, Delete, Patch, ValidationPipe, UsePipes
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserColumnDto } from 'src/dtos/columnDto';
import { UserColumn } from 'src/entities/column';
import { UserGuard } from 'src/guards/user-guard/user-guard.guard';
import { UserColumnsService } from 'src/services/user-columns/user-columns.service';

@ApiTags('user-columns') // for grouping endpoints in Swagger
@Controller('user-columns')
export class UserColumnsController {
    constructor(private userColumnService: UserColumnsService) {}

    @Post('/users/:userId/columns')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'creating new column' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiResponse({ status: 201, description: 'column was created.' })
    @ApiResponse({ status: 400, description: 'invalid data.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async createUserColumnAsync( 
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Body() userColumnDto: UserColumnDto): Promise<UserColumn> {
        return this.userColumnService.createUserColumnAsync(userColumnDto);
    }

    @Get('/users/:userId/columns')
    @ApiOperation({ summary: 'get all columns' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiResponse({ status: 200, description: 'columns were found.' })
    @ApiResponse({ status: 404, description: 'columns were not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async getAllUserColumnsAsync(@Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number
    ): Promise<UserColumn[]> {
        return await this.userColumnService.getAllUserColumnsAsync(userId);
    }

    @Get('/users/:userId/columns/:columnId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'get column by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiResponse({ status: 200, description: 'column was found.' })
    @ApiResponse({ status: 404, description: 'column was not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async getUserColumnAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number
        ): Promise<UserColumn> {
        return await this.userColumnService.getUserColumnAsync(columnId);
    }

    @Delete('/users/:userId/columns/:columnId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'delete column by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiResponse({ status: 200, description: 'column was successfully updated.' })
    @ApiResponse({ status: 404, description: 'column was not found.' })
    @ApiResponse({ status: 400, description: 'invalid column id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async deleteUserColumnAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number
    ): Promise<void> {
        await this.userColumnService.deleteUserColumnAsync(columnId);
    }

    @Patch('/users/:userId/columns/:columnId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'update column by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiResponse({ status: 200, description: 'column was successfully updated.' })
    @ApiResponse({ status: 404, description: 'column was not found.' })
    @ApiResponse({ status: 400, description: 'invalid column id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async updateUserColumnAsync( 
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number, 
        @Body() body: UserColumnDto
    ): Promise<UserColumn> {
        return await this.userColumnService.updateUserColumnAsync(columnId, body);
    }
}
