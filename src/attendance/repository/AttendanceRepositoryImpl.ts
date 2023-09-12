import { PrismaClient } from '@prisma/client';
import { AttendanceRepository } from '../domain/repositories/AttendanceRepository';
import { AttendanceRecord } from '../domain/entities/AttendanceRecord';

export class AttendanceRepositoryImpl implements AttendanceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(attendanceRecord: AttendanceRecord): Promise<number> {
    const { id, ...data } = attendanceRecord.toPersistence();
    const res = await this.prisma.attendanceRecord.create({ data });
    return res.id;
  }
}
