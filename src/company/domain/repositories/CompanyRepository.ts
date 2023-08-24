import { Company } from '../entities/Company';

export interface CompanyRepository {
  create(company: Company): Promise<number>;
}
