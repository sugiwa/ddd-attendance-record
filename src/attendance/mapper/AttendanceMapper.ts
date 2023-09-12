import { Mapper } from '@/shared/mapper/Mapper';
import { AttendanceRecord } from '../domain/entities/AttendanceRecord';
import { AttendanceType } from '../domain/valueObjects/AttendanceType';
import { AttendanceRecordDto } from '../dto/AttendanceRecordDto';

export class AttendanceMapper implements Mapper<AttendanceRecord> {
  public static toDomain(dto: AttendanceRecordDto): AttendanceRecord {
    const id: number = dto.id;
    const attendanceType: AttendanceType = new AttendanceType(
      dto.attendanceType,
    );
    const attendanceRecord = new AttendanceRecord({ id, attendanceType });
    return attendanceRecord;
  }
}
