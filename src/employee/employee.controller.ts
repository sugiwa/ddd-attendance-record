import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/EmployeeDto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  test() {
    return this.employeeService.test();
  }

  @Post()
  createEmployee(@Body() props: EmployeeDto) {
    this.employeeService.createEmployee(props);
  }
}
