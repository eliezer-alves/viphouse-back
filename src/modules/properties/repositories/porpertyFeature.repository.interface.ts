import { IQueryRepository } from 'src/shared/repositories';
import { PropertyFeature } from '../entities';

export abstract class IPropertyFeatureRepository extends IQueryRepository<PropertyFeature> {}
