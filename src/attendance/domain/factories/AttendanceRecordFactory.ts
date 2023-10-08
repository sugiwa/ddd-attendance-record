import { AttendanceRecordDto } from '@/attendance/dto/AttendanceRecordDto';
import { AttendanceRecord } from '../entities/AttendanceRecord';
import { AttendanceType } from '../valueObjects/AttendanceType';
import { StampDate } from '../valueObjects/StampDate';
import { User } from '@/shared/decorators/user.decorator';

export class AttendanceRecordFactory {
  public static create(
    currentUser: User,
    dto: AttendanceRecordDto,
  ): AttendanceRecord {
    const stampDate = new StampDate(new Date());
    const attendanceType = new AttendanceType(dto.attendanceType);
    const employeeId = currentUser.employeeId;
    const attendance = new AttendanceRecord({
      id: null,
      attendanceType,
      stampDate,
      employeeId,
    });
    return attendance;
  }
}
