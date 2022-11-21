import {OrderItem} from '../model/order-item';

export interface OrderItemMetadata<T extends OrderItem> {
  getSubheader(): string;
}
