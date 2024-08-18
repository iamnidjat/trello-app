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
exports.CardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cardDto_1 = require("../../dtos/cardDto");
const user_guard_guard_1 = require("../../guards/user-guard/user-guard.guard");
const cards_service_1 = require("../../services/cards/cards.service");
let CardsController = class CardsController {
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    async createCardAsync(userId, columnId, cardDto) {
        return this.cardsService.createCardAsync(cardDto);
    }
    async getAllCardsAsync(userId, columnId) {
        return await this.cardsService.getAllCardsAsync(columnId);
    }
    async getCardAsync(userId, columnId, cardId) {
        return await this.cardsService.getCardAsync(cardId);
    }
    async deleteCardAsync(userId, columnId, cardId) {
        await this.cardsService.deleteCardAsync(cardId);
    }
    async updateCardAsync(userId, columnId, cardId, body) {
        return await this.cardsService.updateCardAsync(cardId, body);
    }
};
exports.CardsController = CardsController;
__decorate([
    (0, common_1.Post)('/users/:userId/columns/:columnId/cards'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'creating new card' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'card was created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid data.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, cardDto_1.CardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "createCardAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns/:columnId/cards'),
    (0, swagger_1.ApiOperation)({ summary: 'get all cards' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cards were found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'cards were not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getAllCardsAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns/:columnId/cards/:cardId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'get card by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'card was found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'card was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "getCardAsync", null);
__decorate([
    (0, common_1.Delete)('/users/:userId/columns/:columnId/cards/:cardId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'delete card by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'card was successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'card was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid card id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "deleteCardAsync", null);
__decorate([
    (0, common_1.Patch)('/users/:userId/columns/:columnId/cards/:cardId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'update card by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'card was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'card was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid card id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, cardDto_1.CardDto]),
    __metadata("design:returntype", Promise)
], CardsController.prototype, "updateCardAsync", null);
exports.CardsController = CardsController = __decorate([
    (0, swagger_1.ApiTags)('cards'),
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [cards_service_1.CardsService])
], CardsController);
//# sourceMappingURL=cards.controller.js.map