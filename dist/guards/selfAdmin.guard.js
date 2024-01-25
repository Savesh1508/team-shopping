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
exports.selfAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let selfAdminGuard = class selfAdminGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException('Admin unauthorized');
        }
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if (bearer != 'Bearer' || !token) {
            throw new common_1.UnauthorizedException('Admin unauthorized');
        }
        async function verify(token, jwtService) {
            const admin = await jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY,
            });
            if (!admin) {
                throw new common_1.UnauthorizedException('Invalid token provided');
            }
            if (!admin.is_active) {
                throw new common_1.BadRequestException('admin is not active');
            }
            if (String(admin.id) !== req.params.id) {
                throw new common_1.ForbiddenException({
                    message: 'Ruxsat etilmagan foydalanuvchi',
                });
            }
            return true;
        }
        return verify(token, this.jwtService);
    }
};
exports.selfAdminGuard = selfAdminGuard;
exports.selfAdminGuard = selfAdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], selfAdminGuard);
//# sourceMappingURL=selfAdmin.guard.js.map