import { Employee } from '../domain/entities/Employee';
import { EmployeeRepository } from '../domain/repositories/EmployeeRepository';
import { Employee as EmployeeEntity, PrismaClient } from '@prisma/client';

export class EmployeeRepositoryImpl implements EmployeeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  createId(): number {
    return 1;
  }

  async create(employee: Employee): Promise<number> {
    const { id, ...data } = employee.toPersistence();
    const emp = await this.prisma.employee.create({ data });
    return emp.id;
  }
}
