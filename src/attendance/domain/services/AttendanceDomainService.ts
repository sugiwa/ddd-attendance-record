import { CONSTANTS } from '@/constants/constantTokens';
import { Inject, Injectable } from '@nestjs/common';
import { AttendanceRepository } from '../repositories/AttendanceRepository';
import { AttendanceRecordDto } from '@/attendance/dto/AttendanceRecordDto';
import { AttendanceMapper } from '@/attendance/mapper/AttendanceMapper';
import { AttendanceRecordFactory } from '../factories/AttendanceRecordFactory';

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
    const attendanceRecord = AttendanceRecordFactory.create(dto);
    const id = await this.attendanceRepository.create(attendanceRecord);
    return id;
  }

  async update(dto: AttendanceRecordDto): Promise<number> {
    const attendanceRecord = AttendanceMapper.toDomain(dto);
    const id = await this.attendanceRepository.update(attendanceRecord);
    return id;
  }
}
