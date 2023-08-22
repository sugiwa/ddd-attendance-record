import { CompanyDto } from '@/company/dto/CompanyDto';

export interface CompanyRepository {
  create(dto: CompanyDto): Promise<number>;
}
