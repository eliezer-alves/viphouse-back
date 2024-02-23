import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import {
  IPropertyFeatureRepository,
  IPropertyRepository,
  IPropertyTypeRepository,
} from './repositories';

@Injectable()
export class PropertiesService {
  constructor(
    private propertyRepository: IPropertyRepository,
    private propertyTyeRepository: IPropertyTypeRepository,
    private propertyFeatureRepository: IPropertyFeatureRepository,
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

  listAvailablePropertyFeatures() {
    return this.propertyFeatureRepository.list();
  }

  listAvailablePropertyTypes() {
    return this.propertyTyeRepository.list();
  }
}
