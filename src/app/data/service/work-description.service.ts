import {Injectable, Type} from '@angular/core';
import {WorkDescription} from '../model/work-description/work-description';
import {OrderItemService} from './order-item-service';
import {WorkDescriptionRowComponent} from '../../display/list/row/work-description-row/work-description-row.component';
import {RowComponent} from '../../display/list/row/row-component';

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

  public getAll() {
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
    return !this.isValid(item);
  }

  isValid(item: WorkDescription): boolean {
    return item.name != null;
  }

  getOrderItemRowComponent(): Type<RowComponent<WorkDescription>> {
    return WorkDescriptionRowComponent;
  }

  getSubheader(): string {
    return 'Steps';
  }

}
