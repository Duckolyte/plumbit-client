import {Injectable} from '@angular/core';
import {MaterialUnit} from '../model/material/material-unit';
import {Material} from '../model/material/material';
import {OrderItemService} from './order-item-service';

@Injectable({
  providedIn: 'root'
})

export class MaterialService implements OrderItemService<Material> {
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
    },
    {
      id: '4',
      count: 15,
      unit: MaterialUnit.PIECE,
      name: 'lol a mat 4',
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

  isValid(item: Material): boolean {
    return item.name != null && item.count != null && item.unit != null;
  }

  isNotValid(item: Material): boolean {
    return !this.isValid(item);
  }

  createEmptyItem(): Material {
    return new Material();
  }

}
