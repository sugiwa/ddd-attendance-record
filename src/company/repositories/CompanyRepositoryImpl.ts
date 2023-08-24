import { CompanyRepository } from '@company/domain/repositories/CompanyRepository';
import { Company } from '../domain/entities/Company';
import { PrismaClient } from '@prisma/client';

export class CompanyRepositoryImpl implements CompanyRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(company: Company): Promise<number> {
    const { id, ...data } = company.toPersistence();
    const entity = await this.prisma.company.create({ data });
    return entity.id;
  }
}
