import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from '../../../data/model/order-item';
import {OrderItemService} from '../../../data/service/order-item-service';
import {ActiveServiceConfigService} from '../../../data/service/active-service-config.service';

@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css']
})
export class OrderItemListComponent<T extends OrderItem> implements OnInit {

  @Output() saveList: EventEmitter<T[]> = new EventEmitter<T[]>();
  @Input() list: T[];
  private viewedList: T[];
  private subheader: string;
  private filter = '';
  private columnsCount: number;

  constructor(
    @Inject('OrderItemService') private orderItemService: OrderItemService<T>, private activeServiceConfig: ActiveServiceConfigService) {
    this.columnsCount = activeServiceConfig.activeServiceConfig.inputCount;
  }

  ngOnInit() {
    this.subheader = this.orderItemService.getSubheader();
    this.viewedList = this.list;
  }

  addItem() {
    if (this.isEmpty(this.list) || this.hasCompleteFirstRecord()) {
      this.list.unshift(this.orderItemService.createEmptyItem());
      this.updateFilteredList(this.filter);
    }
  }

  private isEmpty(list: T[]) {
    return list.length < 1;
  }

  private hasCompleteFirstRecord() {
    return this.orderItemService.isValid(this.list[0]);
  }

  updateFilteredList(filter: string) {
    this.filter = filter;
    this.viewedList = this.list
      .filter(item => this.orderItemService.isNotValid(item) || item.name.includes(filter));
  }

  submit() {
    if (this.materialsAreValid()) {
      this.saveList.emit(this.list);
    }
  }

  private materialsAreValid() {
    return this.list.filter(item => !this.orderItemService.isValid(item)).length < 1;
  }

  deleteItem(item: T) {
    this.list.splice(this.list.indexOf(item), 1);
    this.updateFilteredList(this.filter);
  }

}
