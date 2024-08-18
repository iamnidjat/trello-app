"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const card_1 = require("../../entities/card");
const typeorm_2 = require("typeorm");
let CardsService = class CardsService {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async createCardAsync(cardDto) {
        try {
            const card = this.cardsRepository.create({
                title: cardDto.title,
                description: cardDto.description,
                positionInColumn: cardDto.positionInColumn,
                deadline: cardDto.deadline,
                createdAt: cardDto.createdAt,
                updatedAt: cardDto.updatedAt,
                userColumn: { id: cardDto.columnId },
            });
            return this.cardsRepository.save(card);
        }
        catch (error) {
            console.error('createCardAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to create a card');
        }
    }
    async getAllCardsAsync(columnId) {
        try {
            return await this.cardsRepository.find({
                where: { userColumn: { id: columnId } }
            });
        }
        catch (error) {
            console.error('getAllCardsAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get cards');
        }
    }
    async getCardAsync(id) {
        try {
            return await this.cardsRepository.findOne({ where: { id } });
        }
        catch (error) {
            console.error('getCardAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get a card');
        }
    }
    async deleteCardAsync(id) {
        try {
            await this.cardsRepository.delete(id);
        }
        catch (error) {
            console.error('deleteCardAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to delete a card');
        }
    }
    async updateCardAsync(id, cardDto) {
        try {
            const card = await this.getCardAsync(id);
            if (!card) {
                throw new common_1.NotFoundException('card was not found');
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
            return this.cardsRepository.save(card);
        }
        catch (error) {
            console.error('updateCardAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to update a card');
        }
    }
};
exports.CardsService = CardsService;
exports.CardsService = CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_1.Card)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CardsService);
//# sourceMappingURL=cards.service.js.map