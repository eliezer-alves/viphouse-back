import { IGenericRepository } from 'src/shared/repositories/generic.repository.interface';
import { Property } from '../entities/property.entity';
import { PropertyType } from '../entities/property-type.entity';
import { PropertyFeature } from '../entities/property-feature.entity';

export abstract class IPropertyRepository extends IGenericRepository<Property> {
  abstract availablePropertyFeatures(): Promise<PropertyFeature[]>;
  abstract availablePropertyTypes(): Promise<PropertyType[]>;
}
