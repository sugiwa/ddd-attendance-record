import { PrismaClient } from '@prisma/client';
import { AttendanceRepository } from '../domain/repositories/AttendanceRepository';
import { AttendanceRecord } from '../domain/entities/AttendanceRecord';
import { AttendanceMapper } from '../mapper/AttendanceMapper';

export class AttendanceRepositoryImpl implements AttendanceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async find(id: number): Promise<AttendanceRecord> {
    const entity = await this.prisma.attendanceRecord.findFirst({
      where: { id },
    });
    return AttendanceMapper.entity2Domain(entity);
  }

  async create(attendanceRecord: AttendanceRecord): Promise<number> {
    const { id, ...data } = attendanceRecord.toPersistence();
    const res = await this.prisma.attendanceRecord.create({ data });
    return res.id;
  }

  async update(attendanceRecord: AttendanceRecord): Promise<number> {
    const data = attendanceRecord.toPersistence();
    const res = await this.prisma.attendanceRecord.update({
      data,
      where: { id: data.id },
    });
    return res.id;
  }
}
