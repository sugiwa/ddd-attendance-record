import { EmployeeDto } from 'src/employee/dto/EmployeeDto';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeFactory } from '../factories/EmployeeFactory';

@Injectable()
export class EmployeeDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private employeeRepository: EmployeeRepository,
  ) {}

  createEmployee(dto: EmployeeDto): Employee {
    const employee = EmployeeFactory.create(dto);
    this.employeeRepository.create(employee);

    return employee;
  }
}
