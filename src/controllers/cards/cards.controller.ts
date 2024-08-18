import { Controller, Get, HttpStatus, Param, ParseIntPipe, Post, UseGuards, Delete, Patch, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CardDto } from 'src/dtos/cardDto';
import { Card } from 'src/entities/card';
import { UserGuard } from 'src/guards/user-guard/user-guard.guard';
import { CardsService } from 'src/services/cards/cards.service';

@ApiTags('cards') // for grouping endpoints in Swagger
@Controller('cards')
export class CardsController {
    constructor(private cardsService: CardsService) {}

    @Post('/users/:userId/columns/:columnId/cards')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'creating new card' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiResponse({ status: 201, description: 'card was created.' })
    @ApiResponse({ status: 400, description: 'invalid data.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async createCardAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Body() cardDto: CardDto
        ): Promise<Card> {
        return this.cardsService.createCardAsync(cardDto);
    }
    
    @Get('/users/:userId/columns/:columnId/cards')
    @ApiOperation({ summary: 'get all cards' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiResponse({ status: 200, description: 'cards were found.' })
    @ApiResponse({ status: 404, description: 'cards were not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @UseGuards(UserGuard)
    async getAllCardsAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number
    ): Promise<Card[]> {
        return await this.cardsService.getAllCardsAsync(columnId);
    }

    @Get('/users/:userId/columns/:columnId/cards/:cardId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'get card by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiResponse({ status: 200, description: 'card was found.' })
    @ApiResponse({ status: 404, description: 'card was not found.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async getCardAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number
        ): Promise<Card> {
        return await this.cardsService.getCardAsync(cardId);
    }

    @Delete('/users/:userId/columns/:columnId/cards/:cardId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'delete card by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiResponse({ status: 200, description: 'card was successfully deleted.' })
    @ApiResponse({ status: 404, description: 'card was not found.' })
    @ApiResponse({ status: 400, description: 'invalid card id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async deleteCardAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number
    ): Promise<void> {
        await this.cardsService.deleteCardAsync(cardId);
    }

    @Patch('/users/:userId/columns/:columnId/cards/:cardId')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: 'update card by its id' })
    @ApiParam({ name: 'userId', required: true, description: 'user id' })
    @ApiParam({ name: 'columnId', required: true, description: 'column id' })
    @ApiParam({ name: 'cardId', required: true, description: 'card id' })
    @ApiResponse({ status: 200, description: 'card was successfully updated.' })
    @ApiResponse({ status: 404, description: 'card was not found.' })
    @ApiResponse({ status: 400, description: 'invalid card id format.' })
    @ApiResponse({ status: 401, description: 'you are not authorized to perform this action.' })
    @ApiResponse({ status: 500, description: 'internal server error.' })
    @UseGuards(UserGuard)
    async updateCardAsync(
        @Param('userId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))userId: number,
        @Param('columnId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))columnId: number,
        @Param('cardId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))cardId: number, 
        @Body() body: CardDto
    ): Promise<Card> {
        return await this.cardsService.updateCardAsync(cardId, body);
    }
}
