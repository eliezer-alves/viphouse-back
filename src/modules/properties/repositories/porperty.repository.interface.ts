import { IGenericRepository } from 'src/shared/repositories';
import { Property } from '../entities';

export abstract class IPropertyRepository extends IGenericRepository<Property> {}
