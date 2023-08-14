import { Inject, Injectable } from '@nestjs/common';
import { EmployeeProps } from './domain/entities/Employee';
import { EmployeeDomainService } from './domain/services/EmployeeDomainService';
import { CONSTANTS } from 'src/constants/constantTokens';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private employeeDomainService: EmployeeDomainService,
  ) {}

  test(): string {
    return 'OK';
  }

  createEmployee(props: EmployeeProps): void {
    this.employeeDomainService.createEmployee(props);
  }
}
