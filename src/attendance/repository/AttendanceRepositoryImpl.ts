import { AttendanceRepository } from '../domain/repositories/AttendanceRepository';

export class AttendanceRepositoryImpl implements AttendanceRepository {
  async create(): Promise<number> {
    return 1;
  }
}
