import { CONSTANTS } from '@/constants/constantTokens';
import { Inject, Injectable } from '@nestjs/common';
import { AttendanceRepository } from '../repositories/AttendanceRepository';

@Injectable()
export class AttendanceDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private attendanceRepository: AttendanceRepository,
  ) {}

  async create(): Promise<number> {
    return 1;
  }
}
