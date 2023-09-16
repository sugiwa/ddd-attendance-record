import { Mapper } from '@/shared/mapper/Mapper';
import { AttendanceRecord } from '../domain/entities/AttendanceRecord';
import { AttendanceType } from '../domain/valueObjects/AttendanceType';
import { AttendanceRecordDto } from '../dto/AttendanceRecordDto';
import { AttendanceRecord as AttendanceRecordEntity } from '@prisma/client';

export class AttendanceMapper implements Mapper<AttendanceRecord> {
  public static toDomain(dto: AttendanceRecordDto): AttendanceRecord {
    const id: number = dto.id;
    const attendanceType: AttendanceType = new AttendanceType(
      dto.attendanceType,
    );
    const attendanceRecord = new AttendanceRecord({ id, attendanceType });
    return attendanceRecord;
  }

  public static entity2Domain(
    entity: AttendanceRecordEntity,
  ): AttendanceRecord {
    const attendanceType = new AttendanceType(entity.attendanceType);
    return new AttendanceRecord({ id: entity.id, attendanceType });
  }

  public static domain2Dto(domain: AttendanceRecord) {
    const dto = new AttendanceRecordDto();
    dto.id = domain.id;
    dto.attendanceType = domain.attendanceType._value;
    return dto;
  }
}
