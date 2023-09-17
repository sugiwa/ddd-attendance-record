import { Mapper } from '@/shared/mapper/Mapper';
import { AttendanceRecord } from '../domain/entities/AttendanceRecord';
import { AttendanceType } from '../domain/valueObjects/AttendanceType';
import { AttendanceRecordDto } from '../dto/AttendanceRecordDto';
import { AttendanceRecord as AttendanceRecordEntity } from '@prisma/client';
import { StampDate } from '../domain/valueObjects/StampDate';

export class AttendanceMapper implements Mapper<AttendanceRecord> {
  public static toDomain(dto: AttendanceRecordDto): AttendanceRecord {
    const id: number = dto.id;
    const attendanceType: AttendanceType = new AttendanceType(
      dto.attendanceType,
    );
    const attendanceRecord = new AttendanceRecord({
      id,
      attendanceType,
      stampDate: undefined,
    });
    return attendanceRecord;
  }

  public static entity2Domain(
    entity: AttendanceRecordEntity,
  ): AttendanceRecord {
    const attendanceType = new AttendanceType(entity.attendanceType);
    const stampDate = new StampDate(entity.stampDate);
    return new AttendanceRecord({ id: entity.id, attendanceType, stampDate });
  }

  public static domain2Dto(domain: AttendanceRecord) {
    const dto = new AttendanceRecordDto();
    dto.id = domain.id;
    dto.attendanceType = domain.attendanceType.getValue();
    dto.stampDate = domain.stampDate.getValue();
    return dto;
  }
}
