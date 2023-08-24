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

  async find(companyId: number): Promise<CompanyDto> {
    return await this.companyDomainService.find(companyId);
  }

  async createCompany(dto: CompanyDto): Promise<number> {
    const companyId = await this.companyDomainService.create(dto);
    return companyId;
  }

  async update(dto: CompanyDto): Promise<number> {
    const companyId = await this.companyDomainService.update(dto);
    return companyId;
  }

  async delete(companyId: number): Promise<number> {
    await this.companyDomainService.delete(companyId);
    return companyId;
  }
}
