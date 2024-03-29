import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../data/model/order/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() private orders: Order[];

  constructor() {
  }

  ngOnInit() {
  }

}
