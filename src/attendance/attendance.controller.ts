import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceRecordDto } from './dto/AttendanceRecordDto';
import { JwtGuard } from '@/auth/jwt.guard';

@Controller('attendance')
@UseGuards(JwtGuard)
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.attendanceService.find(id);
  }

  @Post()
  async create(@Body() dto: AttendanceRecordDto): Promise<number> {
    return await this.attendanceService.create(dto);
  }

  @Put()
  async update(@Body() dto: AttendanceRecordDto): Promise<number> {
    return await this.attendanceService.update(dto);
  }
}
