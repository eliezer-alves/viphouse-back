import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import {
  IPropertyFeatureRepository,
  IPropertyRepository,
  IPropertyTypeRepository,
  PrismaRepository,
} from './repositories';
import { PrismaClient } from '@prisma/client';
import { PrismaClientConnection } from 'src/infra';

@Module({
  controllers: [PropertiesController],
  providers: [
    PropertiesService,
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
    {
      provide: IPropertyFeatureRepository,
      useClass: PrismaRepository.PropertyFeatureRepository,
    },
  ],
})
export class PropertiesModule {}
