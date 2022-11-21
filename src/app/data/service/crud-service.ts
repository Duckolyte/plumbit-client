export interface CrudService<T> {
  getAll(): T[];
  create(item: T): void;
  read(): T;
  update(item: T);
  delete(item: T);
}
