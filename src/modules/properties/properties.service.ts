import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { IPropertyRepository } from './repositories';

@Injectable()
export class PropertiesService {
  constructor(private repository: IPropertyRepository) {}

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
}
