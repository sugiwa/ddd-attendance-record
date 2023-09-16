import { AttendanceRecord } from '../entities/AttendanceRecord';

export interface AttendanceRepository {
  find(id: number): Promise<AttendanceRecord>;
  create(attendanceRecord: AttendanceRecord): Promise<number>;
}
