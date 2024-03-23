import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientConnection } from 'src/infra';
import { PropertiesModule } from 'src/modules/properties/properties.module';
import { PropertyImagesService } from './property-images.service';
import { PropertyImagesController } from './property-images.controller';
import { IFileUploader } from 'src/shared/protocols';
import { AWSFileUploader } from 'src/infra/aws-file-uploader';
import { IPropertyImageRepository, PrismaRepository } from './repositories';

@Module({
  imports: [PropertiesModule],
  controllers: [PropertyImagesController],
  providers: [
    PropertyImagesService,
    {
      provide: PrismaClient,
      useClass: PrismaClientConnection,
    },
    {
      provide: IFileUploader,
      useClass: AWSFileUploader,
    },
    {
      provide: IPropertyImageRepository,
      useClass: PrismaRepository.PropertyImageRepository,
    },
  ],
})
export class PropertyImagesModule {}
