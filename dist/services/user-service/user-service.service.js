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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_1 = require("../../entities/user");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUserAsync(userDto) {
        try {
            const existingUser = await this.usersRepository.findOne({ where: { username: userDto.username } });
            if (existingUser) {
                throw new common_1.ConflictException('User already exists with this username!');
            }
            const hashedPassword = await bcrypt.hash(userDto.password, 10);
            const user = this.usersRepository.create({ username: userDto.username, email: userDto.email, password: hashedPassword });
            return this.usersRepository.save(user);
        }
        catch (error) {
            console.error('createUserAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to create user');
        }
    }
    async findByUsernameAsync(username) {
        try {
            return await this.usersRepository.findOne({ where: { username } });
        }
        catch (error) {
            console.error('findByUsernameAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to find a user');
        }
    }
    async getUserAsync(id) {
        try {
            return await this.usersRepository.findOne({ where: { id },
                select: [
                    'id',
                    'username',
                    'email',
                ], });
        }
        catch (error) {
            console.error('getUserAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get a user');
        }
    }
    async getAllUsersAsync() {
        try {
            return await this.usersRepository.find({ select: [
                    'id',
                    'username',
                    'email',
                ], });
        }
        catch (error) {
            console.error('getAllUsersAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to get all users');
        }
    }
    async deleteUserAsync(id) {
        try {
            await this.usersRepository.delete(id);
        }
        catch (error) {
            console.error('deleteUserAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to delete a user');
        }
    }
    async updateUserAsync(id, userDto) {
        try {
            const user = await this.getUserAsync(id);
            if (!user) {
                throw new common_1.NotFoundException('user not found');
            }
            if (userDto.username) {
                user.username = userDto.username;
            }
            if (userDto.email) {
                user.email = userDto.email;
            }
            if (userDto.password) {
                user.password = await bcrypt.hash(userDto.password, 10);
            }
            return this.usersRepository.save(user);
        }
        catch (error) {
            console.error('updateUserAsync error:', error);
            throw new common_1.InternalServerErrorException('Failed to update a user');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=user-service.service.js.map