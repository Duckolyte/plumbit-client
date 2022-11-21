import {Injectable, Type} from '@angular/core';
import {OrderItem} from '../model/order-item';

@Injectable({
  providedIn: 'root'
})
export class ActiveServiceConfigService {

  // tslint:disable-next-line:variable-name
  private _activeViewType: Type<OrderItem>;

  constructor() { }

  get activeViewType(): Type<OrderItem> {
    return this._activeViewType;
  }

  set activeViewType(value: Type<OrderItem>) {
    this._activeViewType = value;
  }
}
