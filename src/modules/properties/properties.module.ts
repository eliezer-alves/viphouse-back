import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientConnection } from 'src/infra';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import {
  IPropertyRepository,
  IPropertyTypeRepository,
  PrismaRepository,
} from './repositories';
import { IsValidPropertyId, IsValidPropertyTypeId } from './validation-rules';

@Module({
  controllers: [PropertiesController],
  providers: [
    PropertiesService,
    IsValidPropertyId,
    IsValidPropertyTypeId,
    {
      provide: PrismaClient,
      useClass: PrismaClientConnection,
    },
    {
      provide: IPropertyRepository,
      useClass: PrismaRepository.PropertyRepository,
    },
    {
      provide: IPropertyTypeRepository,
      useClass: PrismaRepository.PropertyTypeRepository,
    },
  ],
  exports: [IsValidPropertyId, IsValidPropertyTypeId],
})
export class PropertiesModule {}
