import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';
import { User } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { Otp } from '../otp/model/otp.model';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Otp]),
    JwtModule.register({}),
    FilesModule,
    SmsModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
