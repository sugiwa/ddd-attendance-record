import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceRecordDto } from './dto/AttendanceRecordDto';
import { CurrentUser, User } from '@/shared/decorators/user.decorator';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.attendanceService.find(id);
  }

  @Post()
  async create(
    @CurrentUser() currentUser: User,
    @Body() dto: AttendanceRecordDto,
  ): Promise<number> {
    return await this.attendanceService.create(currentUser, dto);
  }

  @Put()
  async update(@Body() dto: AttendanceRecordDto): Promise<number> {
    return await this.attendanceService.update(dto);
  }
}
