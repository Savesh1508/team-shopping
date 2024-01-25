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
exports.CommentController = void 0;
const comment_model_1 = require("./models/comment.model");
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const update_comment_dto_1 = require("./dto/update-comment.dto");
const selfClient_guard_1 = require("../guards/selfClient.guard");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async create(createCommentDto) {
        return this.commentService.create(createCommentDto);
    }
    async findAll() {
        return this.commentService.findAll();
    }
    async findOne(id) {
        return this.commentService.findOne(id);
    }
    async update(id, updateCommentDto) {
        return this.commentService.update(id, updateCommentDto);
    }
    async delete(id) {
        return this.commentService.delete(id);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'New  Comment1', type: [comment_model_1.Comment1] }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View all Comment' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of Comment',
        type: [comment_model_1.Comment1],
    }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Id Serach Comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comment1 by Id', type: [comment_model_1.Comment1] }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Comment' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated Comment1',
        type: [comment_model_1.Comment1],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comment_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Comment' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted Comment',
        type: [comment_model_1.Comment1],
    }),
    (0, common_1.UseGuards)(selfClient_guard_1.selfClientGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
exports.CommentController = CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comment1'),
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map