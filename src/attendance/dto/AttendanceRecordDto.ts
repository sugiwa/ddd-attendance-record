// import { AttendanceTypeValues } from '../domain/valueObjects/AttendanceType';

export class AttendanceRecordDto {
  id: number;
  attendanceType: number;
  stampDate: Date;
  employeeId: number;
}
