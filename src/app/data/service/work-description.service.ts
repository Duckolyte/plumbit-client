import {Injectable, Type} from '@angular/core';
import {WorkDescription} from '../model/work-description/work-description';
import {OrderItemService} from './order-item-service';
import {WorkDescriptionRowComponent} from '../../display/list/row/work-description-row/work-description-row.component';

@Injectable({
  providedIn: 'root'
})
export class WorkDescriptionService implements OrderItemService<WorkDescription> {

  testWorkDescriptions: WorkDescription[] = [
    {
      name: 'test description 1'
    },
    {
      name: 'test description 2'
    },
    {
      name: 'test description 3'
    }
  ];

  constructor() {  }

  public getWorkDescriptions() {
    return this.testWorkDescriptions;
  }

  create(item: WorkDescription): void {
  }

  delete(item: WorkDescription) {
    this.testWorkDescriptions.splice(this.testWorkDescriptions.indexOf(item), 1);
  }

  read(): WorkDescription {
    return undefined;
  }

  update(item: WorkDescription) {
  }

  createEmptyItem(): WorkDescription {
    return new WorkDescription();
  }

  isNotValid(item: WorkDescription): boolean {
    return false;
  }

  isValid(item: WorkDescription): boolean {
    return false;
  }

  getOrderItemRowComponent(): Type<any> {
    return WorkDescriptionRowComponent;
  }

}
