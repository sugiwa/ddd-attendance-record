import { API_KEY, API_SECRET_KEY, API_URL } from '@/constants/auth';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient, User } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;
  private supabase = createClient(
    this.configService.get(API_URL),
    this.configService.get(API_KEY),
  );
  private saltRound = 10;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.prisma = new PrismaClient();
  }

  async signUp(email: string, password: string) {
    const hashPass = await bcrypt.hash(password, this.saltRound);
    const employeeId = -1;

    const res = await this.prisma.user.create({
      data: {
        email,
        password: hashPass,
        employeeId,
      },
    });

    return res;
  }

  async signIn(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) return false;

    const storedPass = user.password;
    if (!bcrypt.compareSync(password, storedPass)) {
      return false;
    }

    const accessToken = await this.createToken(user);
    return { accessToken };
  }

  async signOut() {
    const result = this.supabase.auth.signOut();
    return result;
  }

  private async createToken(user: User) {
    const { id: sub, email, employeeId } = user;
    const payload = {
      sub,
      email,
      employeeId,
    };
    return await this.jwtService.signAsync(payload, {
      secret: this.configService.get(API_SECRET_KEY),
    });
  }
}
