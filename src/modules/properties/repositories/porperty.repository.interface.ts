import { IGenericRepository } from 'src/shared/repositories/generic.repository.interface';
import { Property } from '../entities/property.entity';

export abstract class IPropertyRepository extends IGenericRepository<Property> {}
