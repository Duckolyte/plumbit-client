export interface CrudService<T> {
  create(item: T): void;
  read(): T;
  update(item: T);
  delete(item: T);
}
