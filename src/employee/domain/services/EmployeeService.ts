import { EntityId } from 'src/libs/domain/Entity';
import { Employee, EmployeeProps } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

export class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  createEmployee(props: EmployeeProps): Employee {
    const id: EntityId = this.employeeRepository.createId();
    const employee = Employee.create({ id, props });
    return employee;
  }
}
