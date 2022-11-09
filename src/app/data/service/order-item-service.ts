import {OrderItem} from '../model/order-item';
import {CrudService} from './crud-service';
import {ValidatorService} from './validator-service';

export interface OrderItemService<T extends OrderItem> extends CrudService<T>, ValidatorService<T> {
  createEmptyItem(): T;
}
