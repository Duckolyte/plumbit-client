import {Injectable} from '@angular/core';
import {WorkDescription} from '../model/work-description/work-description';
import {CrudService} from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class WorkDescriptionService implements CrudService<WorkDescription> {

  testWorkDescriptions: WorkDescription[] = [
    {
      description: 'test description 1'
    },
    {
      description: 'test description 2'
    },
    {
      description: 'test description 3'
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

}
