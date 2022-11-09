import {MaterialUnit} from './material-unit';
import {OrderItem} from '../order-item';

export class Material implements OrderItem {
  id: string;
  count: number;
  unit: MaterialUnit;
  deleted: boolean;
  name: string;
}
