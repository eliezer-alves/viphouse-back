import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import {
  IPropertyRepository,
  IPropertyTypeRepository,
  PrismaRepository,
} from './repositories';
import { PrismaClient } from '@prisma/client';
import { PrismaClientConnection } from 'src/infra';
import { IsValidPropertyTypeId } from './validation-rules';

@Module({
  controllers: [PropertiesController],
  providers: [
    PropertiesService,
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
})
export class PropertiesModule {}
