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
const type_graphql_1 = require("type-graphql");
const Knowledge_1 = require("../models/Knowledge");
const Me_1 = require("../models/Me");
const Project_1 = require("../models/Project");
let MeResolver = class MeResolver {
    async knowledges({ prisma }) {
        return prisma.knowledge.findMany({ where: { state: true } });
    }
    async projects({ prisma }) {
        return prisma.project.findMany({ where: { state: true } });
    }
    async personalData({ prisma }) {
        return await prisma.me.findFirst();
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [Knowledge_1.Knowledge]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeResolver.prototype, "knowledges", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [Project_1.Project]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeResolver.prototype, "projects", null);
__decorate([
    (0, type_graphql_1.Query)(() => Me_1.Me),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeResolver.prototype, "personalData", null);
MeResolver = __decorate([
    (0, type_graphql_1.Resolver)(Me_1.Me)
], MeResolver);
exports.default = MeResolver;
