export interface ValidatorService<T> {
  isValid(item: T): boolean;
  isNotValid(item: T): boolean;
}
