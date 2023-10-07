import { API_KEY, API_SECRET_KEY, API_URL } from '@/constants/auth';
import { EmployeeService } from '@/employee/employee.service';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient, User } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import * as bcrypt from 'bcrypt';
import { AuthSignUpDto } from './dto/AuthSignUpDto';
import { EmployeeDto } from '@/employee/dto/EmployeeDto';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;
  private supabase = createClient(
    this.configService.get(API_URL),
    this.configService.get(API_KEY),
  );
  private saltRound = 10;

  @Inject(EmployeeService)
  private readonly employeeService: EmployeeService;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.prisma = new PrismaClient();
  }

  /**
   * save employee and auth user info
   * @param dto
   * @returns
   */
  async signUp(dto: AuthSignUpDto) {
    const { name, email, password } = dto;
    const employeeDto = new EmployeeDto();
    employeeDto.name = name;
    const employeeId = await this.employeeService.createEmployee(employeeDto);
    const authUser = this.saveAuthUser(email, password, employeeId);
    return authUser;
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

  private async saveAuthUser(
    email: string,
    password: string,
    employeeId: number,
  ) {
    const hashPass = await bcrypt.hash(password, this.saltRound);
    const authUser = await this.prisma.user.create({
      data: {
        email,
        password: hashPass,
        employeeId,
      },
    });

    return authUser;
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
