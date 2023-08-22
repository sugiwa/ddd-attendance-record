import { Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/CompanyDto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  async createCompany(props: CompanyDto): Promise<number> {
    const companyId = this.companyService.createCompany(props);
    return companyId;
  }
}
