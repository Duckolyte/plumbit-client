import {OrderItem} from '../../../data/model/order-item';

export interface RowComponent<T extends OrderItem> {
  rowData: T;
}
