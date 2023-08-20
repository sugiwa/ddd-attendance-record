import { Employee } from '../entities/Employee';

export interface EmployeeRepository {
  find(employeeId: number): Promise<Employee>;
  create(employee: Employee): Promise<number>;
}
