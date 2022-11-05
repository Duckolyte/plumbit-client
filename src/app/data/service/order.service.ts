import {Injectable} from '@angular/core';
import {CrudService} from './crud-service';
import {Order} from '../model/order/order';
import {MaterialUnit} from '../model/material/material-unit';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements CrudService<Order> {

  testOrders: Order[] = [
    {
      id: '1',
      materials: [
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
      ],
      steps: [
        {
          description: 'test description 1'
        },
        {
          description: 'test description 2'
        },
        {
          description: 'test description 3'
        }
      ]
    },
    {
      id: '2',
      materials: [
        {
          id: '4',
          count: 1,
          unit: MaterialUnit.PIECE,
          name: 'test material 1',
          deleted: false
        },
        {
          id: '5',
          count: 3,
          unit: MaterialUnit.METER,
          name: 'test material 2',
          deleted: false
        },
        {
          id: '6',
          count: 15,
          unit: MaterialUnit.PIECE,
          name: 'test material 3',
          deleted: false
        }
      ],
      steps: [
        {
          description: 'test description 1'
        },
        {
          description: 'test description 2'
        },
        {
          description: 'test description 3'
        }
      ]
    }
  ];

  constructor() {  }

  public getOrders() {
  return this.testOrders;
}

create(item: Order): void {
}

delete(item: Order) {
  this.testOrders.splice(this.testOrders.indexOf(item), 1);
}

read(): Order {
  return undefined;
}

update(item: Order) {
}
}
