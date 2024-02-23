import { IGenericRepository } from 'src/shared/repositories/generic.repository.interface';
import { Property } from '../entities/property.entity';
import { PropertyType } from '../entities/property-type.entity';
import { PropertyFeature } from '../entities/property-feature.entity';
import { NoTimestamps } from 'src/shared/types';

export abstract class IPropertyRepository extends IGenericRepository<Property> {
  abstract availablePropertyFeatures(): Promise<
    NoTimestamps<PropertyFeature>[]
  >;
  abstract availablePropertyTypes(): Promise<NoTimestamps<PropertyType[]>>;
}
