import { AttendanceRecordDto } from '@/attendance/dto/AttendanceRecordDto';
import { AttendanceRecord } from '../entities/AttendanceRecord';
import { AttendanceType } from '../valueObjects/AttendanceType';
import { StampDate } from '../valueObjects/StampDate';

export class AttendanceRecordFactory {
  public static create(dto: AttendanceRecordDto): AttendanceRecord {
    const stampDate = new StampDate(new Date());
    const attendanceType = new AttendanceType(dto.attendanceType);
    const attendance = new AttendanceRecord({
      id: null,
      attendanceType,
      stampDate,
    });
    return attendance;
  }
}
