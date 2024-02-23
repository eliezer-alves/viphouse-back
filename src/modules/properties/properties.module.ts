import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { IPropertyRepository, PrismaRepository } from './repositories';
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
  ],
})
export class PropertiesModule {}
