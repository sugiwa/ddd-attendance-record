import { Inject, Injectable } from '@nestjs/common';
import { EmployeeDomainService } from './domain/services/EmployeeDomainService';
import { CONSTANTS } from 'src/constants/constantTokens';
import { EmployeeDto } from './dto/EmployeeDto';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private employeeDomainService: EmployeeDomainService,
  ) {}

  test(): string {
    return 'OK';
  }

  async createEmployee(props: EmployeeDto): Promise<number> {
    const employeeId = this.employeeDomainService.createEmployee(props);
    return employeeId;
  }
}
