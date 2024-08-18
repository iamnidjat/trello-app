import { CardDto } from 'src/dtos/cardDto';
import { Card } from 'src/entities/card';
import { Repository } from 'typeorm';
export declare class CardsService {
    private cardsRepository;
    constructor(cardsRepository: Repository<Card>);
    createCardAsync(cardDto: CardDto): Promise<Card>;
    getAllCardsAsync(columnId: number): Promise<Card[]>;
    getCardAsync(id: number): Promise<Card | undefined>;
    deleteCardAsync(id: number): Promise<void>;
    updateCardAsync(id: number, cardDto: CardDto): Promise<Card>;
}
