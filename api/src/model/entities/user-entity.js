"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "Id", type: "smallint" })
    ], UserEntity.prototype, "id");
    __decorate([
        typeorm_1.Column({ name: "FirstName", length: 100 })
    ], UserEntity.prototype, "firstName");
    __decorate([
        typeorm_1.Column({ name: "LastName", length: 100 })
    ], UserEntity.prototype, "lastName");
    __decorate([
        typeorm_1.Column({ name: "Email", length: 100 })
    ], UserEntity.prototype, "email");
    UserEntity = __decorate([
        typeorm_1.Entity("user")
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
