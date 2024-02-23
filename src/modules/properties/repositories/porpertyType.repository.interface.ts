import { IQueryRepository } from 'src/shared/repositories';
import { PropertyType } from '../entities';

export abstract class IPropertyTypeRepository extends IQueryRepository<PropertyType> {}
