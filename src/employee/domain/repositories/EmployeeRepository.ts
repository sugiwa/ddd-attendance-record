import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  create(employee: Employee): Promise<number>;
}
