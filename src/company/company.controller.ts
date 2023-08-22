import { Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  async createCompany(): Promise<number> {
    const companyId = this.companyService.createCompany();
    return companyId;
  }
}
