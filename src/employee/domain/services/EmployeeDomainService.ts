import { EmployeeDto } from 'src/employee/dto/EmployeeDto';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeMapper } from 'src/employee/mappers/EmployeeMapper';

@Injectable()
export class EmployeeDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private employeeRepository: EmployeeRepository,
  ) {}

  async createEmployee(dto: EmployeeDto): Promise<number> {
    const employee = EmployeeMapper.toDomain(dto);
    const employeeId = await this.employeeRepository.create(employee);
    return employeeId;
  }
}
