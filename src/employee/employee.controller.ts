import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeProps } from './domain/entities/Employee';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  test() {
    return this.employeeService.test();
  }

  @Post()
  createEmployee(@Body() props: EmployeeProps) {
    this.employeeService.createEmployee(props);
  }
}
