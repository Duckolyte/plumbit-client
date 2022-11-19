import {OrderItem} from '../model/order-item';
import {CrudService} from './crud-service';
import {ValidatorService} from './validator-service';
import {Type} from '@angular/core';
import {RowComponent} from '../../display/list/row/row-component';


export interface OrderItemService<T extends OrderItem> extends CrudService<T>, ValidatorService<T> {
  createEmptyItem(): T;
  getOrderItemRowComponent(): Type<RowComponent<T>>;
}
