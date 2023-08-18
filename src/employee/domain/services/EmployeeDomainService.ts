import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants/constantTokens';

@Injectable()
export class EmployeeDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private employeeRepository: EmployeeRepository,
  ) {}

  createEmployee(props: Employee): Employee {
    return null;
    // const id: EntityId = this.employeeRepository.createId();
    // const employee = Employee.create({ id, props });
    // this.employeeRepository.create(employee);
    // return employee;
  }
}
