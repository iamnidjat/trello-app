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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_1 = require("../../entities/comment");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async createCommentAsync(commentDto) {
        try {
            const comment = this.commentsRepository.create({
                content: commentDto.content,
                createdAt: commentDto.createdAt,
                updatedAt: commentDto.updatedAt,
                card: { id: commentDto.cardId },
            });
            return this.commentsRepository.save(comment);
        }
        catch (error) {
            console.error('createCommentAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to create a comment');
        }
    }
    async getAllCommentsAsync(cardId) {
        try {
            return await this.commentsRepository.find({
                where: { card: { id: cardId } },
            });
        }
        catch (error) {
            console.error('getAllCommentsAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get comments');
        }
    }
    async getCommentAsync(id) {
        try {
            return await this.commentsRepository.findOne({ where: { id } });
        }
        catch (error) {
            console.error('getCommentAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get a comment');
        }
    }
    async deleteCommentAsync(id) {
        try {
            await this.commentsRepository.delete(id);
        }
        catch (error) {
            console.error('deleteCommentAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to delete a comment');
        }
    }
    async updateCommentAsync(id, commentDto) {
        try {
            const comment = await this.getCommentAsync(id);
            if (!comment) {
                throw new common_1.NotFoundException('comment was not found');
            }
            if (comment.content) {
                comment.content = comment.content;
            }
            if (comment.createdAt) {
                comment.createdAt = comment.createdAt;
            }
            if (comment.updatedAt) {
                comment.updatedAt = comment.updatedAt;
            }
            return this.commentsRepository.save(comment);
        }
        catch (error) {
            console.error('updateCommentAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to update a comment');
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsService);
//# sourceMappingURL=comments.service.js.map