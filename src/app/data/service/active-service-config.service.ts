import {Injectable, Type} from '@angular/core';
import {OrderItem} from '../model/order-item';
import {Material} from '../model/material/material';
import {WorkDescription} from '../model/work-description/work-description';

@Injectable({
  providedIn: 'root'
})
export class ActiveServiceConfigService {

  // tslint:disable-next-line:variable-name
  private _activeServiceConfig: OrderItemServiceConfig;

  constructor() { }

  get activeServiceConfig(): OrderItemServiceConfig {
    return this._activeServiceConfig;
  }

  set activeServiceConfig(value: OrderItemServiceConfig) {
    this._activeServiceConfig = value;
  }
}

interface OrderItemServiceConfig {
  activeViewType: OrderItem;
  inputCount: number;
}

export const MaterialServiceConfig: OrderItemServiceConfig = {
  activeViewType: Material,
  inputCount: 1
};

export const StepServiceConfig: OrderItemServiceConfig = {
  activeViewType: WorkDescription,
  inputCount: 1
};
