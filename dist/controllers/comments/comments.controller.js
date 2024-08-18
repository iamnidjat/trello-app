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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const commentDto_1 = require("../../dtos/commentDto");
const user_guard_guard_1 = require("../../guards/user-guard/user-guard.guard");
const comments_service_1 = require("../../services/comments/comments.service");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async createCommentAsync(userId, columnId, cardId, commentDto) {
        return this.commentsService.createCommentAsync(commentDto);
    }
    async getAllCommentsAsync(userId, columnId, cardId) {
        return await this.commentsService.getAllCommentsAsync(cardId);
    }
    async getCommentAsync(userId, columnId, cardId, commentId) {
        return await this.commentsService.getCommentAsync(commentId);
    }
    async deleteCommentAsync(userId, columnId, cardId, commentId) {
        await this.commentsService.deleteCommentAsync(commentId);
    }
    async updateCommentAsync(userId, columnId, cardId, commentId, body) {
        return await this.commentsService.updateCommentAsync(commentId, body);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, common_1.Post)('/users/:userId/columns/:columnId/cards/:cardId/comments'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'creating new comment' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'comment was created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid data.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, commentDto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createCommentAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns/:columnId/cards/:cardId/comments'),
    (0, swagger_1.ApiOperation)({ summary: 'get all comments' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'comments were found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'comments were not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getAllCommentsAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'get comment by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiParam)({ name: 'commentId', required: true, description: 'comment id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'comment was found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'comment was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(3, (0, common_1.Param)('commentId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getCommentAsync", null);
__decorate([
    (0, common_1.Delete)('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'delete comment by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiParam)({ name: 'commentId', required: true, description: 'comment id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'comment was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'comment was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid comment id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(3, (0, common_1.Param)('commentId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteCommentAsync", null);
__decorate([
    (0, common_1.Patch)('/users/:userId/columns/:columnId/cards/:cardId/comments/:commentId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'update comment by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiParam)({ name: 'cardId', required: true, description: 'card id' }),
    (0, swagger_1.ApiParam)({ name: 'commentId', required: true, description: 'comment id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'comment was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'comment was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid comment id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Param)('cardId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(3, (0, common_1.Param)('commentId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number, commentDto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "updateCommentAsync", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('comments'),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map