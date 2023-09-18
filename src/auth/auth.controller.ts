import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './dto/AuthRequestDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() dto: AuthRequestDto) {
    return this.authService.signUp(dto.email, dto.password);
  }

  @Post('signin')
  async signIn(@Body() dto: AuthRequestDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  @Post('signout')
  async signOut() {
    return this.authService.signOut();
  }
}
