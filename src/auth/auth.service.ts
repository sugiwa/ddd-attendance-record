import { API_KEY, API_URL } from '@/constants/auth';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { AuthResponse, createClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;
  private supabase = createClient(
    this.configService.get(API_URL),
    this.configService.get(API_KEY),
  );

  constructor(private readonly configService: ConfigService) {
    this.prisma = new PrismaClient();
  }

  async signUp(email: string, password: string) {
    const hashPass = await bcrypt.hash(password, 10);
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
    const authResponse: AuthResponse =
      await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
    const { data } = authResponse;
    const { session } = data;
    return session;
  }

  async signOut() {
    const result = this.supabase.auth.signOut();
    return result;
  }
}
