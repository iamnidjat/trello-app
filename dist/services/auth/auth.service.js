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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_service_1 = require("../user-service/user-service.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async loginAsync(username, password) {
        try {
            const user = await this.userService.findByUsernameAsync(username);
            if (user && (await bcrypt.compare(password, user.password))) {
                const payload = { sub: user.id, email: user.email };
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
            return null;
        }
        catch (error) {
            console.error('Login error:', error);
            throw new common_1.InternalServerErrorException('Failed to log in');
        }
    }
    async signUpAsync(payload) {
        try {
            const user = await this.userService.createUserAsync(payload);
            const tokenPayload = { sub: user.id, email: user.email };
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                access_token: await this.jwtService.signAsync(tokenPayload),
            };
        }
        catch (error) {
            console.error('SignUp error:', error);
            throw new common_1.InternalServerErrorException('Failed to sign up');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map