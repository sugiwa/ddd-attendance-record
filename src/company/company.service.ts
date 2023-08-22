import { Inject, Injectable } from '@nestjs/common';
import { CompanyDto } from './dto/CompanyDto';
import { CONSTANTS } from '@/constants/constantTokens';
import { CompanyDomainService } from './domain/services/CompanyDomainService';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(CONSTANTS.DOMAIN_SERVICE)
    private companyDomainService: CompanyDomainService,
  ) {}

  async createCompany(dto: CompanyDto): Promise<number> {
    const companyId = this.companyDomainService.create(dto);
    return companyId;
  }
}
