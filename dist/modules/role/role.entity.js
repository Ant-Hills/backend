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
const typeorm_1 = require("typeorm");
const abstract_entity_1 = require("../../common/abstract.entity");
const role_type_1 = require("../../common/constants/role-type");
const RoleDto_1 = require("./dto/RoleDto");
let RoleEntity = class RoleEntity extends abstract_entity_1.AbstractEntity {
    constructor() {
        super(...arguments);
        this.dtoClass = RoleDto_1.RoleDto;
    }
};
__decorate([
    typeorm_1.Column({ type: 'enum', enum: role_type_1.RoleType, default: role_type_1.RoleType.USER }),
    __metadata("design:type", String)
], RoleEntity.prototype, "role", void 0);
RoleEntity = __decorate([
    typeorm_1.Entity({ name: 'roles' })
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map