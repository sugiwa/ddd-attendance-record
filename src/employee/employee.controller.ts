import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/EmployeeDto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  test() {
    return this.employeeService.test();
  }

  @Get(':id')
  async findEmployee(@Param('id', ParseIntPipe) id: number) {
    return await this.employeeService.find(id);
  }

  @Post()
  async createEmployee(@Body() props: EmployeeDto) {
    const employeeId = await this.employeeService.createEmployee(props);
    return employeeId;
  }
}
