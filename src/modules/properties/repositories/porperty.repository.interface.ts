import { IGenericRepository } from 'src/shared/repositories';
import { Property } from '../entities/property.entity';

export abstract class IPropertyRepository extends IGenericRepository<Property> {}
