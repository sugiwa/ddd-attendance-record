import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import JwtStrategy from './jwt.strategy';
import { AuthInterceptor } from './auth.interceptor';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy, AuthInterceptor],
})
export class AuthModule {}
