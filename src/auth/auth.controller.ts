import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/AuthRequestDto';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/test')
  @UseGuards(JwtGuard)
  async test() {
    return 'OK';
  }

  @Post('signup')
  async signUp(@Body() dto: AuthRequestDto) {
    return this.authService.signUp(dto.email, dto.password);
  }

  @Post('signin')
  async signIn(@Body() dto: AuthRequestDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  @Post('signout')
  @UseGuards(JwtGuard)
  async signOut() {
    return this.authService.signOut();
  }
}
