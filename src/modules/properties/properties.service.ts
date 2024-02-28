import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { IPropertyRepository, IPropertyTypeRepository } from './repositories';
import { IFileUploader } from 'src/shared/protocols';

@Injectable()
export class PropertiesService {
  constructor(
    private propertyRepository: IPropertyRepository,
    private propertyTypeRepository: IPropertyTypeRepository,
    private fileUploader: IFileUploader,
  ) {}

  create(data: CreatePropertyDto) {
    return this.propertyRepository.create(data);
  }

  findAll() {
    return this.propertyRepository.list();
  }

  findOne(id: string) {
    return this.propertyRepository.find(id);
  }

  update(id: string, data: UpdatePropertyDto) {
    return data;
  }

  remove(id: string) {
    return this.propertyRepository.remove(id);
  }

  async uploadImages(files: Express.Multer.File[], propertyId: string) {
    const uploadedFiles = await this.fileUploader.upload(files);
    return {
      files: uploadedFiles,
      propertyId,
    };
  }

  listAvailablePropertyTypes() {
    return this.propertyTypeRepository.list();
  }
}
