"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGuard = void 0;
const common_1 = require("@nestjs/common");
let UserGuard = class UserGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const userId = request.params.userId;
        if (request.session && request.session.user) {
            if (request.session.user.id == userId) {
                return true;
            }
        }
        throw new common_1.UnauthorizedException('You are not authorized to perform this action');
    }
};
exports.UserGuard = UserGuard;
exports.UserGuard = UserGuard = __decorate([
    (0, common_1.Injectable)()
], UserGuard);
//# sourceMappingURL=user-guard.guard.js.map