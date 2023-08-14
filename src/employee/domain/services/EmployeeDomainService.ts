import { EntityId } from 'src/libs/domain/Entity';
import { Employee, EmployeeProps } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants/constantTokens';

@Injectable()
export class EmployeeDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private employeeRepository: EmployeeRepository,
  ) {}

  createEmployee(props: EmployeeProps): Employee {
    const id: EntityId = this.employeeRepository.createId();
    const employee = Employee.create({ id, props });
    return employee;
  }
}
