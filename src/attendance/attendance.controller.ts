import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceRecordDto } from './dto/AttendanceRecordDto';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.attendanceService.find(id);
  }

  @Post()
  async create(@Body() dto: AttendanceRecordDto): Promise<number> {
    const id = this.attendanceService.create(dto);
    return id;
  }
}
