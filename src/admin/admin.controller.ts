import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';
import { NUMBER } from 'sequelize';
import { AdminGuard } from '../guards/admin.guard';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { SuperAdminGuard } from '../guards/superAdmin.guard';
import { selfAdminGuard } from '../guards/selfAdmin.guard';
import { SelectDto } from './dto/select_limit.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Register Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @HttpCode(HttpStatus.CREATED)
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

  @ApiOperation({summary: 'Find limited admins'})
  @ApiResponse({status: 200, type: [Admin]})
  @Post('limit/admin')
  select_limit_admin(
    @Body() selectDto: SelectDto
  ): Promise<Object> {
    return this.adminService.limit_admin(selectDto);
  }

  @ApiOperation({ summary: 'Logout Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminGuard)
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }

  @ApiOperation({ summary: 'All Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(SuperAdminGuard)
  @Get('all')
  findAll() {
    return this.adminService.findAllAdmin();
  }

  @ApiOperation({ summary: 'Search Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(SuperAdminGuard)
  @Get('search')
  findAllFilter(
    @Query('name') name: string,
    @Query('last_name') last_name: string,
    @Query('email') email: string,
  ) {
    return this.adminService.SearchAdmin({ name, last_name, email });
  }


  @ApiOperation({ summary: 'RefreshToken Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }

 


  @ApiOperation({ summary: 'Update by id yourself' })
  @ApiResponse({ status: 201, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(selfAdminGuard)
  @Put('yourself/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateYourself(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Update by id by Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(SuperAdminGuard)
  @Put('update/:id')
  updateAdmin(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateByAdmin(+id, updateAdminDto);
  }


  @ApiOperation({ summary: 'Get by id yourself' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(selfAdminGuard)
  @Get('yourself/:id')
  getYourself(@Param('id') id: string) {
    return this.adminService.findByYourself(+id);
  }

 
  @ApiOperation({ summary: 'find One by Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @HttpCode(HttpStatus.OK)
  @UseGuards(SuperAdminGuard)
  @Get(':id/findOne')
  findOne(@Param('id') id: string) {
    return this.adminService.findByAdmin(+id);
  }

  @ApiOperation({ summary: 'delete by id by Admin' })
  @ApiResponse({ status: 200, type: NUMBER })
  @UseGuards(SuperAdminGuard)
  @HttpCode(204)
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.adminService.removeByAdmin(+id);
  }
}
