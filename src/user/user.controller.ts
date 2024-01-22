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
  UseGuards,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { Response } from 'express';
import { CookieGetter } from 'src/decorators/cookieGetter.decorator';
import { FindUserDto } from './dto/find-user.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiOperation({ summary: 'Logout User' })
  @ApiResponse({ status: 200, type: User })
  @HttpCode(HttpStatus.OK)
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.logout(refreshToken, res);
  }

  @ApiOperation({ summary: 'refresh user' })
  @ApiResponse({ status: 200, type: [User] })
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.refreshToken(+id, refreshToken, res);
  }

  @ApiOperation({ summary: 'find user' })
  @Post('all')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }

  @Post('/otp')
  newOtp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.newOTP(createUserDto);
  }

  @Post('/verify')
  verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.usersService.verifyOtp(verifyOtpDto);
  }
}
