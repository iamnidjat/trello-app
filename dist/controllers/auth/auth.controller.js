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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../../services/auth/auth.service");
const loginDto_1 = require("../../dtos/loginDto");
const signUpDto_1 = require("../../dtos/signUpDto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginAsync(body, req, res) {
        const user = await this.authService.loginAsync(body.username, body.password);
        if (user) {
            req.session.user = { id: user.id, username: user.username, email: user.email };
            req.session.access_token = user.access_token;
            console.log('Congratulations! You successfully logged in!\nYou\'ll be redirected to the user board');
            return res.status(200).json({
                message: 'Login was successful',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
                access_token: user.access_token,
            });
        }
        else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    async singUpAsync(body, req, res) {
        const user = await this.authService.signUpAsync(body);
        if (user) {
            req.session.user = { id: user.id, username: user.username, email: user.email };
            req.session.access_token = user.access_token;
            console.log('Congratulations! You successfully signed up!\nYou\'ll be redirected to the user board');
            return res.status(200).json({
                message: 'Registration was successful',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
                access_token: user.access_token,
            });
        }
        else {
            return res.status(400).json({ message: 'Invalid request body' });
        }
    }
    async logOut(req, res) {
        req.session.destroy(err => {
            if (err) {
                console.error('Session destruction error:', err);
                return res.status(500).send("Failed to log out!");
            }
            console.log("You were logged out!");
            return res.status(200).send("You were logged out!");
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'user login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'login was successful.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid request body.' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'invalid credentials.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDto_1.LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAsync", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, swagger_1.ApiOperation)({ summary: 'user registration' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'registration was successful.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'invalid request body.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'user already exists.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signUpDto_1.SignUpDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singUpAsync", null);
__decorate([
    (0, common_1.Post)('/logout'),
    (0, swagger_1.ApiOperation)({ summary: 'user logout' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'logout was successful.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'failed to log out.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'internal server error.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map