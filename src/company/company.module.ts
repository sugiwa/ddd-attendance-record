import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CONSTANTS } from '@/constants/constantTokens';
import { CompanyRepositoryImpl } from './repositories/CompanyRepositoryImpl';
import { CompanyDomainService } from './domain/services/CompanyDomainService';

@Module({
  controllers: [CompanyController],
  providers: [
    CompanyService,
    {
      provide: CONSTANTS.DOMAIN_SERVICE,
      useClass: CompanyDomainService,
    },
    {
      provide: CONSTANTS.REPOSITORY,
      useClass: CompanyRepositoryImpl,
    },
  ],
})
export class CompanyModule {}
