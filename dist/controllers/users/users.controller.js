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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_service_1 = require("../../services/user-service/user-service.service");
const userDto_1 = require("../../dtos/userDto");
const user_guard_guard_1 = require("../../guards/user-guard/user-guard.guard");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUserAsync(userId) {
        return this.userService.getUserAsync(userId);
    }
    async getAllUsersAsync() {
        return this.userService.getAllUsersAsync();
    }
    async deleteUserAsync(userId) {
        await this.userService.deleteUserAsync(userId);
    }
    async updateUserAsync(userId, body) {
        return await this.userService.updateUserAsync(userId, body);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('/users/:userId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'get user by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user was found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'user was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({
        errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserAsync", null);
__decorate([
    (0, common_1.Get)("/users"),
    (0, swagger_1.ApiOperation)({ summary: 'get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'users were found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'users were not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsersAsync", null);
__decorate([
    (0, common_1.Delete)('/users/:userId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'update user by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'user was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid user id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserAsync", null);
__decorate([
    (0, common_1.Patch)('/users/:userId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'update user by its id' }),
    (0, swagger_1.ApiParam)({ name: 'userId', required: true, description: 'user id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user was successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'user was not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid user id format.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'you are not authorized to perform this action.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    (0, common_1.UseGuards)(user_guard_guard_1.UserGuard),
    __param(0, (0, common_1.Param)('userId', new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_ACCEPTABLE }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, userDto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserAsync", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map