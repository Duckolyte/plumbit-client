import { Injectable } from '@angular/core';
import {MaterialUnit} from '../model/material/material-unit';
import {Material} from '../model/material/material';
import {CrudService} from './crud-service';

@Injectable({
  providedIn: 'root'
})

export class MaterialService implements CrudService<Material> {

  testMaterials: Material[] = [
    {
      id: '1',
      count: 1,
      unit: MaterialUnit.PIECE,
      name: 'test material 1',
      deleted: false
    },
    {
      id: '2',
      count: 3,
      unit: MaterialUnit.METER,
      name: 'test material 2',
      deleted: false
    },
    {
      id: '3',
      count: 15,
      unit: MaterialUnit.PIECE,
      name: 'test material 3',
      deleted: false
    }
  ];

  constructor() { }

  public getMaterials() {
    return this.testMaterials;
  }

  create(item: Material): void {
  }

  delete(item: Material) {
    this.testMaterials.splice(this.testMaterials.indexOf(item), 1);
  }

  read(): Material {
    return undefined;
  }

  update(item: Material) {
  }
}
