import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Res,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { Response } from 'express';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('otp')
  newOtp(@Body() createUserDto: CreateUserDto) {
    return this.userService.newOTP(createUserDto);
  }

  @Post('verify')
  verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.userService.verifyOtp(verifyOtpDto);
  }

  @ApiOperation({ summary: 'refresh user' })
  @ApiResponse({ status: 200, type: [User] })
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.refreshToken(+id, refreshToken, res);
  }

  @ApiOperation({ summary: 'Search user' })
  @Get('search')
  search(@Query('full_name') full_name: string, @Query('phone') phone: string) {
    return this.userService.search({ full_name, phone });
  }

  @ApiOperation({ summary: 'Logout User' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.OK)
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.logout(refreshToken, res);
  }

  @ApiOperation({ summary: 'Update user self' })
  @ApiResponse({ status: 201, type: User })
  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }
}
