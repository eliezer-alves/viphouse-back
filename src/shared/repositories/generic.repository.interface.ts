import { NoTimestamps } from '../types';
import { IQueryRepository } from './query.repository.interface';

export abstract class IGenericRepository<T> extends IQueryRepository<T> {
  abstract create(item: Omit<NoTimestamps<T>, 'id'>): Promise<T>;
  abstract remove(id: string | number): Promise<T>;
}
