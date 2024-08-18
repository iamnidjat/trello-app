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
exports.UserColumnDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserColumnDto {
}
exports.UserColumnDto = UserColumnDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'The unique identifier for the column' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserColumnDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The title for the column' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserColumnDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The position in a board for the column' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserColumnDto.prototype, "positionInBoard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The date when the column was created' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserColumnDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'The date when the column was last updated', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserColumnDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The unique identifier for the user associated with the column' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserColumnDto.prototype, "userId", void 0);
//# sourceMappingURL=columnDto.js.map