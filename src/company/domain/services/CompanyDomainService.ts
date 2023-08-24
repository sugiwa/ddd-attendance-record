import { CompanyDto } from '@/company/dto/CompanyDto';
import { CompanyRepository } from '../repositories/CompanyRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from '@/constants/constantTokens';
import { CompanyMapper } from '@/company/mappers/CompanyMapper';

@Injectable()
export class CompanyDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private companyRepository: CompanyRepository,
  ) {}

  async find(companyId: number): Promise<CompanyDto> {
    const company = await this.companyRepository.find(companyId);
    const dto = CompanyMapper.domain2Dto(company);
    return dto;
  }

  async create(dto: CompanyDto): Promise<number> {
    const company = CompanyMapper.dto2Domain(dto);
    const companyId = await this.companyRepository.create(company);
    return companyId;
  }

  async update(dto: CompanyDto): Promise<number> {
    const company = CompanyMapper.dto2Domain(dto);
    const companyId = await this.companyRepository.update(company);
    return companyId;
  }

  async delete(companyId: number): Promise<number> {
    await this.companyRepository.delete(companyId);
    return companyId;
  }
}
