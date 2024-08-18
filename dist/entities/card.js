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
exports.Card = void 0;
const typeorm_1 = require("typeorm");
const column_1 = require("./column");
const comment_1 = require("./comment");
let Card = class Card {
    ;
};
exports.Card = Card;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Card.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Card.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Card.prototype, "positionInColumn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => column_1.UserColumn, (userColumn) => userColumn.cards),
    __metadata("design:type", column_1.UserColumn)
], Card.prototype, "userColumn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_1.Comment, (comment) => comment.card),
    __metadata("design:type", Array)
], Card.prototype, "comments", void 0);
exports.Card = Card = __decorate([
    (0, typeorm_1.Entity)()
], Card);
//# sourceMappingURL=card.js.map