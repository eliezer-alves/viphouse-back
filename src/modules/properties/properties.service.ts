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

  create(createPropertyDto: CreatePropertyDto) {
    return createPropertyDto;
  }

  findAll() {
    return `This action returns all properties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return updatePropertyDto;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }

  listAvailablePropertyFeatures() {
    return this.propertyFeatureRepository.list();
  }

  listAvailablePropertyTypes() {
    return this.propertyTyeRepository.list();
  }
}
