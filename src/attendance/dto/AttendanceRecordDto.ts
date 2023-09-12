import { AttendanceTypeValues } from '../domain/valueObjects/AttendanceType';

export class AttendanceRecordDto {
  id: number;
  attendanceType: AttendanceTypeValues;
}
