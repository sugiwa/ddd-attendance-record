import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/CompanyDto';
import { JwtGuard } from '@/auth/jwt.guard';

@Controller('company')
@UseGuards(JwtGuard)
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get(':id')
  async findCompany(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CompanyDto> {
    return await this.companyService.find(id);
  }

  @Post()
  async createCompany(@Body() props: CompanyDto): Promise<number> {
    const companyId = this.companyService.createCompany(props);
    return companyId;
  }

  @Put()
  async update(@Body() dto: CompanyDto): Promise<number> {
    const companyId = this.companyService.update(dto);
    return companyId;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return await this.companyService.delete(id);
  }
}
