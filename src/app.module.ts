import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { CompanyModule } from './company/company.module';
import { AttendanceModule } from './Attendance/attendance.module';

@Module({
  imports: [EmployeeModule, CompanyModule, AttendanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
