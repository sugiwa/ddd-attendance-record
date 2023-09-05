export interface AttendanceRepository {
  create(): Promise<number>;
}
