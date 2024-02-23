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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./models/admin.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const sequelize_2 = require("sequelize");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const jwtPlayload = {
            id: admin.id,
            is_active: admin.is_active,
            is_superAdmin: admin.is_superAdmin,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(jwtPlayload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(jwtPlayload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async registration(createAdminDto, res) {
        const admin = await this.adminRepo.findOne({
            where: { email: createAdminDto.email },
        });
        if (admin) {
            throw new common_1.BadRequestException('Email already exists!');
        }
        if (createAdminDto.password !== createAdminDto.confirim_password) {
            throw new common_1.BadRequestException('Password is not match');
        }
        const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
        const newAdmin = await this.adminRepo.create({
            ...createAdminDto,
            password: hashed_password,
        });
        const token = await this.getTokens(newAdmin);
        const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
        const updateAdmin = await this.adminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: newAdmin.id }, returning: true });
        res.cookie('refresh_token', token.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 100,
            httpOnly: true,
        });
        const response = {
            status: 201,
            message: 'User registered',
            user: updateAdmin[1][0],
            token,
        };
        return response;
    }
    async login(loginadminDto, res) {
        const { email, password } = loginadminDto;
        const admin = await this.adminRepo.findOne({ where: { email } });
        if (!admin) {
            throw new common_1.UnauthorizedException('Admin not registered');
        }
        if (!admin.is_active) {
            throw new common_1.BadRequestException('Admin is not active');
        }
        const isMatchPass = await bcrypt.compare(password, admin.password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException('Admin not registered(pass)');
        }
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateAdmin = await this.adminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 100,
            httpOnly: true,
        });
        const response = {
            message: 'Admin logged in',
            user: updateAdmin[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const AdminData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!AdminData) {
            throw new common_1.ForbiddenException('Admin not found');
        }
        const updatedAdmin = await this.adminRepo.update({ hashed_refresh_token: null }, { where: { id: AdminData.id }, returning: true });
        res.clearCookie('refresh_token');
        const response = {
            message: 'Admin logged out successfully',
            user: updatedAdmin[1][0],
        };
        return response;
    }
    async limit_admin(selectDto) {
        const admins = await this.adminRepo.findAll();
        if (admins.length === 0) {
            return {
                message: 'Admin Not Found',
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        let limit_admins = [];
        if (selectDto.sort === 1 || selectDto.sort < 1) {
            let num = 0;
            for (let index = num; index < num + selectDto.limit; index++) {
                if (admins[index] === undefined)
                    break;
                limit_admins.push(admins[index]);
            }
        }
        else {
            let num = (selectDto.sort - 1) * selectDto.limit;
            for (let index = num; index < num + selectDto.limit; index++) {
                if (admins[index] === undefined)
                    break;
                limit_admins.push(admins[index]);
            }
        }
        if (limit_admins.length === 0)
            return {
                message: 'Admins Not Found',
                status: common_1.HttpStatus.NOT_FOUND,
            };
        return {
            status: common_1.HttpStatus.OK,
            limit_admins,
        };
    }
    async SearchAdmin({ name, last_name, email }) {
        let where = {};
        if (name) {
            where['first_name'] = { [sequelize_2.Op.like]: `%${name}%` };
        }
        if (email) {
            where['email'] = { [sequelize_2.Op.like]: `%${email}%` };
        }
        if (last_name) {
            where['last_name'] = { [sequelize_2.Op.like]: `%${last_name}%` };
        }
        const admin = await this.adminRepo.findAll({
            where,
            order: [['createdAt', 'ASC']],
        });
        if (!admin || admin.length == 0) {
            throw new common_1.BadRequestException('admin not found');
        }
        return admin;
    }
    async updateYourself(id, updateAdminYourselfDto) {
        const admin = await this.adminRepo.update({ ...updateAdminYourselfDto }, {
            where: { id },
            returning: true,
        });
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        return admin;
    }
    async updateByAdmin(id, updateAdminDto) {
        const admin = await this.adminRepo.update({ ...updateAdminDto }, {
            where: { id },
            returning: true,
        });
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        return admin;
    }
    async refreshToken(admin_id, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (admin_id != decodedToken['id']) {
            throw new common_1.BadRequestException('Admin not found');
        }
        const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
        if (!admin || !admin.hashed_refresh_token) {
            throw new common_1.BadRequestException('Admin not found');
        }
        const tokentMatch = await bcrypt.compare(refreshToken, admin.hashed_refresh_token);
        if (!tokentMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const token = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
        const updateAdmin = await this.adminRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: admin.id }, returning: true });
        res.cookie('refresh_token', token.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 100,
            httpOnly: true,
        });
        const response = {
            message: 'Refresh token successfully',
            user: updateAdmin[1][0],
            token,
        };
        return response;
    }
    async findByAdmin(id) {
        const admin = await this.adminRepo.findByPk(id);
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        return admin;
    }
    async findAllAdmin() {
        return this.adminRepo.findAll({ order: [['createdAt', 'DESC']] });
    }
    async findByYourself(id) {
        const admin = await this.adminRepo.findByPk(id);
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        return admin;
    }
    async removeByAdmin(id) {
        const admin = await this.adminRepo.findByPk(id);
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        const removeAdmin = await this.adminRepo.destroy({ where: { id } });
        const response = {
            removeAdmin,
            status: 204,
        };
        return response;
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map