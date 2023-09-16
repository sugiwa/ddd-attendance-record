import { CONSTANTS } from '@/constants/constantTokens';
import { Inject, Injectable } from '@nestjs/common';
import { AttendanceRepository } from '../repositories/AttendanceRepository';
import { AttendanceRecordDto } from '@/attendance/dto/AttendanceRecordDto';
import { AttendanceMapper } from '@/attendance/mapper/AttendanceMapper';

@Injectable()
export class AttendanceDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private attendanceRepository: AttendanceRepository,
  ) {}

  async find(id: number): Promise<AttendanceRecordDto> {
    const attendanceRecord = await this.attendanceRepository.find(id);
    const dto = AttendanceMapper.domain2Dto(attendanceRecord);
    return dto;
  }

  async create(dto: AttendanceRecordDto): Promise<number> {
    const attendanceRecord = AttendanceMapper.toDomain(dto);
    const id = this.attendanceRepository.create(attendanceRecord);
    return id;
  }
}
