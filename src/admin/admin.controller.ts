import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';
import { FindAdminDto } from './dto/find-admin.dto';
import { NUMBER } from 'sequelize';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Register Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('signup')
  registration(
    @Body() createUserDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.registration(createUserDto, res);
  }

  @ApiOperation({ summary: 'Login Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }

  // @ApiOperation({ summary: 'Logout Admin' })
  // @ApiResponse({ status: 200, type: Admin })
  // @HttpCode(HttpStatus.OK)
  // // @UseGuards(AdminGuard)
  // @Post('signout')
  // logout(
  //   // @CookieGetter('refresh_token') refreshToken: string,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   return this.adminService.logout(refreshToken, res);
  // }

  // @ApiOperation({ summary: 'RefreshToken Admin' })
  // @ApiResponse({ status: 200, type: Admin })
  // @HttpCode(HttpStatus.OK)
  // @Post(':id/refresh')
  // refresh(
  //   @Param('id') id: string,
  //   @CookieGetter('refresh_token') refreshToken: string,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   return this.adminService.refreshToken(+id, refreshToken, res);
  // }

  @ApiOperation({ summary: 'All Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @Get('all')
  findAll() {
    return this.adminService.findAllAdmin();
  }

  @ApiOperation({ summary: 'Search Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  // @UseGuards(SuperAdminGuard)
  @Post('find')
  findAllFilter(@Body() findAdminDto: FindAdminDto) {
    return this.adminService.Search(findAdminDto);
  }

  @ApiOperation({ summary: 'Update by id yourself' })
  @ApiResponse({ status: 201, type: Admin })
  @HttpCode(HttpStatus.OK)
  // @UseGuards(selfAdminGuard)
  @Put('yourself/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateYourself(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Update by id by Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  updateAdmin(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateYourself(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'find One by Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.adminService.findByAdmin(+id);
  }

  @ApiOperation({ summary: 'delete by id by Admin' })
  @ApiResponse({ status: 200, type: NUMBER })
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.adminService.removeByAdmin(+id);
  }
}