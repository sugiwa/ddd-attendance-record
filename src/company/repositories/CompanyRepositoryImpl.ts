import { CompanyRepository } from '@company/domain/repositories/CompanyRepository';
import { Company } from '../domain/entities/Company';
import { PrismaClient } from '@prisma/client';
import { CompanyMapper } from '../mappers/CompanyMapper';

export class CompanyRepositoryImpl implements CompanyRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async find(companyId: number): Promise<Company> {
    const entity = await this.prisma.company.findFirst({
      where: { id: companyId },
    });
    const company = CompanyMapper.entity2Domain(entity);
    return company;
  }

  async create(company: Company): Promise<number> {
    const { id, ...data } = company.toPersistence();
    const entity = await this.prisma.company.create({ data });
    return entity.id;
  }

  async update(company: Company): Promise<number> {
    const data = company.toPersistence();
    const entity = await this.prisma.company.update({
      data,
      where: { id: data.id },
    });
    return entity.id;
  }

  async delete(companyId: number): Promise<number> {
    await this.prisma.company.delete({
      where: {
        id: companyId,
      },
    });
    return companyId;
  }
}
