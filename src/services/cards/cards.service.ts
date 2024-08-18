import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardDto } from 'src/dtos/cardDto';
import { Card } from 'src/entities/card';
import { UserColumn } from 'src/entities/column';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Card)
        private cardsRepository: Repository<Card>,
      ) {}
    
      async createCardAsync(cardDto: CardDto): Promise<Card> {
        try {
          const card = this.cardsRepository.create({ 
              title: cardDto.title,
              description: cardDto.description,
              positionInColumn: cardDto.positionInColumn,
              deadline: cardDto.deadline,
              createdAt: cardDto.createdAt,
              updatedAt: cardDto.updatedAt,
              userColumn: { id: cardDto.columnId } as UserColumn, // associate with column
          }); // creates new card column
           return this.cardsRepository.save(card); // save the card to the db and return it
        } catch (error) {
          console.error('createCardAsync error:', error);
          throw new InternalServerErrorException('Failed to create a card');
        }
      }

      async getAllCardsAsync(columnId: number): Promise<Card[]> {
        try {
          return await this.cardsRepository.find({
            where: { userColumn: { id: columnId }} // filter columns by columnId
          });
        } catch (error) {
          console.error('getAllCardsAsync error:', error);
          throw new InternalServerErrorException('Failed to get cards');
        }
      }

      async getCardAsync(id: number): Promise<Card | undefined> {
        try {
          return await this.cardsRepository.findOne({ where: {id} });
        } catch (error) {
          console.error('getCardAsync error:', error);
          throw new InternalServerErrorException('Failed to get a card');
        }
      }

      async deleteCardAsync(id: number): Promise<void> {
        try {
          await this.cardsRepository.delete(id);
        } catch (error) {
          console.error('deleteCardAsync error:', error);
          throw new InternalServerErrorException('Failed to delete a card');
        }
      }

      async updateCardAsync(id: number, cardDto: CardDto): Promise<Card> {
        try {
          const card = await this.getCardAsync(id);
          if (!card) {
            throw new NotFoundException('card was not found');
          }
      
          if (card.title) {
            card.title = card.title;
          }

          if (card.description) {
            card.description = card.description;
          }
      
          if (card.positionInColumn) {
            card.positionInColumn = card.positionInColumn;
          }

          if (card.deadline) {
            card.deadline = card.deadline;
          }

          if (card.createdAt) {
            card.createdAt = card.createdAt;
          }

          if (card.updatedAt) {
            card.updatedAt = card.updatedAt;
          }
      
          return this.cardsRepository.save(card); // save the updated card to the db and return it
        } catch (error) {
          console.error('updateCardAsync error:', error);
          throw new InternalServerErrorException('Failed to update a card');
        }
      }
}
