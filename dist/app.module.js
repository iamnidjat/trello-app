"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_1 = require("./entities/user");
const column_1 = require("./entities/column");
const card_1 = require("./entities/card");
const auth_module_1 = require("./modules/auth.module");
const user_columns_module_1 = require("./modules/user-columns.module");
const comments_module_1 = require("./modules/comments.module");
const cards_module_1 = require("./modules/cards.module");
const comment_1 = require("./entities/comment");
const user_module_1 = require("./modules/user.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                password: 'admin',
                username: 'postgres',
                entities: [user_1.User, column_1.UserColumn, card_1.Card, comment_1.Comment],
                database: 'mydatabase',
                synchronize: true,
                logging: true,
            }),
            auth_module_1.AuthModule,
            user_columns_module_1.UserColumnsModule,
            comments_module_1.CommentsModule,
            cards_module_1.CardsModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map