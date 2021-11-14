import { Injectable } from '@angular/core';
import {MaterialUnit} from '../model/material/material-unit';
import {Material} from '../model/material/material';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  testMaterials: Material[] = [
    {
      count: 1,
      unit: MaterialUnit.PIECE,
      name: 'test material 1'
    },
    {
      count: 3,
      unit: MaterialUnit.METER,
      name: 'test material 2'
    },
    {
      count: 15,
      unit: MaterialUnit.PIECE,
      name: 'test material 3'
    }
  ];

  constructor() { }

  public getMaterials() {
    return this.testMaterials;
  }

}
