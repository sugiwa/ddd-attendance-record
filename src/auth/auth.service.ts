import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthResponse, createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}
  private supabase = createClient(
    this.configService.get('API_URL'),
    this.configService.get('API_KEY'),
  );

  async signUp(email: string, password: string) {
    const authResponse: AuthResponse = await this.supabase.auth.signUp({
      email,
      password,
    });
    const { data, error } = authResponse;
    const { user } = data;
    return { user, error };
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
