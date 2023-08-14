import { EmployeeRepository } from '../domain/repositories/EmployeeRepository';

export class EmployeeRepositoryImpl implements EmployeeRepository {
  createId(): number {
    return 1;
  }
}
