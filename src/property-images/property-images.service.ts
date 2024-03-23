import { Injectable } from '@nestjs/common';
import { IPropertyImageRepository } from './repositories';
import { IFileUploader } from 'src/shared/protocols';

@Injectable()
export class PropertyImagesService {
  constructor(
    private propertyImageRepository: IPropertyImageRepository,
    private fileUploader: IFileUploader,
  ) {}

  async upload(files: Express.Multer.File[], propertyId: string) {
    const uploadedFiles = (await this.fileUploader.upload(files)).map(
      (file) => ({ ...file, propertyId }),
    );
    return this.propertyImageRepository.createMany(uploadedFiles);
  }
}
