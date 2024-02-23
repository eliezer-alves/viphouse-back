import { NoTimestamps } from '../types';

export abstract class IGenericRepository<T> {
  abstract find(id: string): Promise<T>;

  abstract create(item: Omit<NoTimestamps<T>, 'id'>): Promise<T>;
}
