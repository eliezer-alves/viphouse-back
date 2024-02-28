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
import { IsValidPropertyId, IsValidPropertyTypeId } from './validation-rules';
import { AWSFileUploader } from 'src/infra/aws-file-uploader';
import { IFileUploader } from 'src/shared/protocols';

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
    {
      provide: IFileUploader,
      useClass: AWSFileUploader,
    },
  ],
})
export class PropertiesModule {}
