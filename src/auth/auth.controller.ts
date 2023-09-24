import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/AuthRequestDto';
import { Public } from '@/shared/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/test')
  async test() {
    return 'OK';
  }

  @Public()
  @Post('signup')
  async signUp(@Body() dto: AuthRequestDto) {
    return this.authService.signUp(dto.email, dto.password);
  }

  @Public()
  @Post('signin')
  async signIn(@Body() dto: AuthRequestDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  @Post('signout')
  async signOut() {
    return this.authService.signOut();
  }
}
