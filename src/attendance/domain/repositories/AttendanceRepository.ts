import { AttendanceRecord } from '../entities/AttendanceRecord';

export interface AttendanceRepository {
  create(attendanceRecord: AttendanceRecord): Promise<number>;
}
