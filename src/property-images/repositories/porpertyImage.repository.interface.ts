import { IGenericRepository } from 'src/shared/repositories';
import { PropertyImage } from '../entities';
import { NoTimestamps } from 'src/shared/types';

export abstract class IPropertyImageRepository extends IGenericRepository<PropertyImage> {
  abstract createMany(
    data: Omit<NoTimestamps<PropertyImage>, 'id'>[],
  ): Promise<number>;
}
