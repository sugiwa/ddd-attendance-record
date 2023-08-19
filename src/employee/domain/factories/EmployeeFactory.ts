import { EmployeeDto } from 'src/employee/dto/EmployeeDto';
import { Employee } from '../entities/Employee';
import { EmployeeName } from '../valueObjects/EmployeeName';

export class EmployeeFactory {
  static create(dto: EmployeeDto): Employee {
    const name: EmployeeName = new EmployeeName(dto.name);
    const employee = new Employee({ id: 0, name });
    return employee;
  }
}
