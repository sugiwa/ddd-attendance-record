import { Company } from '../entities/Company';

export interface CompanyRepository {
  find(companyId: number): Promise<Company>;
  create(company: Company): Promise<number>;
  update(company: Company): Promise<number>;
  delete(companyId: number): Promise<number>;
}
