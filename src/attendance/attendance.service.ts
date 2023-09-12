import { CONSTANTS } from '@/constants/constantTokens';
import { Inject, Injectable } from '@nestjs/common';
import { AttendanceDomainService } from './domain/services/AttendanceDomainService';
import { AttendanceRecordDto } from './dto/AttendanceRecordDto';

@Injectable()
export class AttendanceService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private attendanceDomainService: AttendanceDomainService,
  ) {}

  test(): string {
    return 'OK';
  }

  async create(dto: AttendanceRecordDto): Promise<number> {
    const id = await this.attendanceDomainService.create(dto);
    return id;
  }
}
