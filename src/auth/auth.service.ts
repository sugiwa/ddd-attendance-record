import { Injectable } from '@nestjs/common';
import { AuthResponse, createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private supabase = createClient(process.env.API_URL, process.env.API_KEY);

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
    const { data, error } = authResponse;
    const { user } = data;
    return { user, error };
  }

  async signOut() {
    const result = this.supabase.auth.signOut();
    return result;
  }
}
