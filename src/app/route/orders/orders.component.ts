import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../data/service/order.service';
import {Order} from '../../data/model/order/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
