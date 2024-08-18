"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserColumnsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_columns_controller_1 = require("../controllers/user-columns/user-columns.controller");
const column_1 = require("../entities/column");
const user_columns_service_1 = require("../services/user-columns/user-columns.service");
let UserColumnsModule = class UserColumnsModule {
};
exports.UserColumnsModule = UserColumnsModule;
exports.UserColumnsModule = UserColumnsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([column_1.UserColumn]),
        ],
        controllers: [user_columns_controller_1.UserColumnsController],
        providers: [user_columns_service_1.UserColumnsService],
        exports: [user_columns_service_1.UserColumnsService],
    })
], UserColumnsModule);
//# sourceMappingURL=user-columns.module.js.map