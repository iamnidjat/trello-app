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
exports.UserColumnsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const columnDto_1 = require("../../dtos/columnDto");
const user_guard_guard_1 = require("../../guards/user-guard/user-guard.guard");
const user_columns_service_1 = require("../../services/user-columns/user-columns.service");
let UserColumnsController = class UserColumnsController {
    constructor(userColumnService) {
        this.userColumnService = userColumnService;
    }
    async createUserColumnAsync(userId, userColumnDto) {
        return this.userColumnService.createUserColumnAsync(userColumnDto);
    }
    async getAllUserColumnsAsync(userId) {
        return await this.userColumnService.getAllUserColumnsAsync(userId);
    }
    async getUserColumnAsync(userId, columnId) {
        return await this.userColumnService.getUserColumnAsync(columnId);
    }
    async deleteUserColumnAsync(userId, columnId) {
        await this.userColumnService.deleteUserColumnAsync(columnId);
    }
    async updateUserColumnAsync(userId, columnId, body) {
        return await this.userColumnService.updateUserColumnAsync(columnId, body);
    }
};
exports.UserColumnsController = UserColumnsController;
__decorate([
    (0, common_1.Post)('/users/:userId/columns'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'creating new column' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'column was created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid data.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, columnDto_1.UserColumnDto]),
    __metadata("design:returntype", Promise)
], UserColumnsController.prototype, "createUserColumnAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns'),
    (0, swagger_1.ApiOperation)({ summary: 'get all columns' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'columns were found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'columns were not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserColumnsController.prototype, "getAllUserColumnsAsync", null);
__decorate([
    (0, common_1.Get)('/users/:userId/columns/:columnId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'get column by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'column was found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'column was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserColumnsController.prototype, "getUserColumnAsync", null);
__decorate([
    (0, common_1.Delete)('/users/:userId/columns/:columnId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'delete column by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'column was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'column was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid column id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserColumnsController.prototype, "deleteUserColumnAsync", null);
__decorate([
    (0, common_1.Patch)('/users/:userId/columns/:columnId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'update column by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiParam)({ name: 'columnId', required: true, description: 'column id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'column was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'column was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid column id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Param)('columnId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, columnDto_1.UserColumnDto]),
    __metadata("design:returntype", Promise)
], UserColumnsController.prototype, "updateUserColumnAsync", null);
exports.UserColumnsController = UserColumnsController = __decorate([
    (0, swagger_1.ApiTags)('user-columns'),
    (0, common_1.Controller)('user-columns'),
    __metadata("design:paramtypes", [user_columns_service_1.UserColumnsService])
], UserColumnsController);
//# sourceMappingURL=user-columns.controller.js.map