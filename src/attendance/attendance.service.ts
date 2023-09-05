import { CONSTANTS } from '@/constants/constantTokens';
import { Inject, Injectable } from '@nestjs/common';
import { AttendanceDomainService } from './domain/services/AttendanceDomainService';

@Injectable()
export class AttendanceService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private attendanceDomainService: AttendanceDomainService,
  ) {}

  test(): string {
    return 'OK';
  }

  async create(): Promise<number> {
    return 1;
  }
}
