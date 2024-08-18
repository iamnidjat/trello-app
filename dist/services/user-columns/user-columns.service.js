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
exports.UserColumnsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const column_1 = require("../../entities/column");
const typeorm_2 = require("typeorm");
let UserColumnsService = class UserColumnsService {
    constructor(userColumnsRepository) {
        this.userColumnsRepository = userColumnsRepository;
    }
    async createUserColumnAsync(userColumnDto) {
        try {
            const userColumn = this.userColumnsRepository.create({
                title: userColumnDto.title,
                positionInBoard: userColumnDto.positionInBoard,
                createdAt: userColumnDto.createdAt,
                updatedAt: userColumnDto.updatedAt,
                user: { id: userColumnDto.userId },
            });
            return this.userColumnsRepository.save(userColumn);
        }
        catch (error) {
            console.error('createUserColumnAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to create a user column');
        }
    }
    async getAllUserColumnsAsync(userId) {
        try {
            return await this.userColumnsRepository.find({
                where: { user: { id: userId } },
            });
        }
        catch (error) {
            console.error('getAllUserColumnsAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get user columns');
        }
    }
    async getUserColumnAsync(id) {
        try {
            return await this.userColumnsRepository.findOne({ where: { id } });
        }
        catch (error) {
            console.error('getUserColumnAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get a user column');
        }
    }
    async deleteUserColumnAsync(id) {
        try {
            await this.userColumnsRepository.delete(id);
        }
        catch (error) {
            console.error('deleteUserColumnAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to delete a user column');
        }
    }
    async updateUserColumnAsync(id, userColumnDto) {
        try {
            const userColumn = await this.getUserColumnAsync(id);
            if (!userColumn) {
                throw new common_1.NotFoundException('user column was not found');
            }
            if (userColumnDto.title) {
                userColumn.title = userColumnDto.title;
            }
            if (userColumnDto.positionInBoard) {
                userColumn.positionInBoard = userColumnDto.positionInBoard;
            }
            if (userColumnDto.createdAt) {
                userColumn.createdAt = userColumnDto.createdAt;
            }
            if (userColumnDto.updatedAt) {
                userColumn.updatedAt = userColumnDto.updatedAt;
            }
            return this.userColumnsRepository.save(userColumn);
        }
        catch (error) {
            console.error('updateUserColumnAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to update a user column');
        }
    }
};
exports.UserColumnsService = UserColumnsService;
exports.UserColumnsService = UserColumnsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(column_1.UserColumn)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserColumnsService);
//# sourceMappingURL=user-columns.service.js.map