import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsController } from 'src/controllers/cards/cards.controller';
import { Card } from 'src/entities/card';
import { CardsService } from 'src/services/cards/cards.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Card]), 
    ],
    controllers: [CardsController],
    providers: [CardsService],
    exports: [CardsService], 
})
export class CardsModule {}
