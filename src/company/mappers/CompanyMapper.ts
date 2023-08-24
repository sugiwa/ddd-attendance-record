import { Mapper } from '@/shared/mapper/Mapper';
import { Company } from '@company/domain/entities/Company';
import { CompanyDto } from '../dto/CompanyDto';
import { CompanyName } from '../domain/valueObjects/CompanyName';

export class CompanyMapper implements Mapper<Company> {
  public static dto2Domain(dto: CompanyDto) {
    const id: number = dto.id;
    const name: CompanyName = new CompanyName(dto.name);
    const company = new Company({ id, name });
    return company;
  }
}
