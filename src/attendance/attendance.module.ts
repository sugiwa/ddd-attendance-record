import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { CONSTANTS } from '@/constants/constantTokens';
import { AttendanceDomainService } from './domain/services/AttendanceDomainService';
import { AttendanceRepositoryImpl } from './repository/AttendanceRepositoryImpl';

@Module({
  controllers: [AttendanceController],
  providers: [
    AttendanceService,
    {
      provide: CONSTANTS.DOMAIN_SERVICE,
      useClass: AttendanceDomainService,
    },
    {
      provide: CONSTANTS.REPOSITORY,
      useClass: AttendanceRepositoryImpl,
    },
  ],
})
export class AttendanceModule {}
