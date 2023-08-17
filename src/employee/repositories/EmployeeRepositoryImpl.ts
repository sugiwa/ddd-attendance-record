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

  create(employee: Employee): void {
    const emp: EmployeeEntity = {
      id: 1,
      name: 'test',
    };
    this.prisma.employee.create({ data: emp });
  }
}
