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

  createEmployee(props: EmployeeDto): void {
    this.employeeDomainService.createEmployee(props);
  }
}
