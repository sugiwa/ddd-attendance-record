import { Mapper } from '@/shared/mapper/Mapper';
import { Company } from '@company/domain/entities/Company';
import { CompanyDto } from '../dto/CompanyDto';
import { CompanyName } from '../domain/valueObjects/CompanyName';
import { Company as CompanyEntity } from '@prisma/client';

export class CompanyMapper implements Mapper<Company> {
  public static dto2Domain(dto: CompanyDto): Company {
    const id: number = dto.id;
    const name: CompanyName = new CompanyName(dto.name);
    const company = new Company({ id, name });
    return company;
  }

  public static entity2Domain(entity: CompanyEntity): Company {
    const id: number = entity.id;
    const name: CompanyName = new CompanyName(entity.name);
    const company = new Company({ id, name });
    return company;
  }

  public static domain2Dto(company: Company): CompanyDto {
    const dto = new CompanyDto();
    dto.id = company.id;
    dto.name = company.name.getValue();
    return dto;
  }
}
