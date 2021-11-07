import {Injectable} from '@angular/core';
import {WorkDescription} from '../model/work-description/work-description';

@Injectable({
  providedIn: 'root'
})
export class WorkDescriptionService {

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

}
