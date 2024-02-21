export abstract class IGenericRepository<T> {
  abstract find(id: string): Promise<T>;

  abstract create(item: Omit<T, 'id'>): Promise<T>;
}
