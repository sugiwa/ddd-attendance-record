import { Mapper } from 'src/shared/mapper/Mapper';
import { Employee } from '../domain/entities/Employee';
import { EmployeeDto } from '../dto/EmployeeDto';
import { EmployeeName } from '../domain/valueObjects/EmployeeName';

export class EmployeeMapper implements Mapper<Employee> {
  public static toDomain(dto: EmployeeDto): Employee {
    const name: EmployeeName = new EmployeeName(dto.name);
    const employee = new Employee({ id: 0, name });
    return employee;
  }
}
