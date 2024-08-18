import { CardDto } from 'src/dtos/cardDto';
import { Card } from 'src/entities/card';
import { CardsService } from 'src/services/cards/cards.service';
export declare class CardsController {
    private cardsService;
    constructor(cardsService: CardsService);
    createCardAsync(userId: number, columnId: number, cardDto: CardDto): Promise<Card>;
    getAllCardsAsync(userId: number, columnId: number): Promise<Card[]>;
    getCardAsync(userId: number, columnId: number, cardId: number): Promise<Card>;
    deleteCardAsync(userId: number, columnId: number, cardId: number): Promise<void>;
    updateCardAsync(userId: number, columnId: number, cardId: number, body: CardDto): Promise<Card>;
}
