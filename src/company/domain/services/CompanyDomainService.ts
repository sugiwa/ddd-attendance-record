import { CompanyDto } from '@/company/dto/CompanyDto';
import { CompanyRepository } from '../repositories/CompanyRepository';
import { Inject, Injectable } from '@nestjs/common';
import { CONSTANTS } from '@/constants/constantTokens';

@Injectable()
export class CompanyDomainService {
  constructor(
    @Inject(CONSTANTS.REPOSITORY)
    private companyRepository: CompanyRepository,
  ) {}

  async create(dto: CompanyDto): Promise<number> {
    return Promise.resolve(1);
  }
}
