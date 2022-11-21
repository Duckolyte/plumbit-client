import {Component, ComponentFactoryResolver, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OrderItem} from '../../../../data/model/order-item';
import {RowTemplateDirective} from '../row-template-directive';
import {OrderItemService} from '../../../../data/service/order-item-service';
import {RowComponent} from '../row-component';
import {WorkDescription} from '../../../../data/model/work-description/work-description';

@Component({
  selector: 'app-generic-edit-row',
  templateUrl: './generic-edit-row.component.html',
  styleUrls: ['./generic-edit-row.component.css']
})
export class GenericEditRowComponent<T extends OrderItem> implements OnInit {

  @Output()
  deleteRow: EventEmitter<T> = new EventEmitter<T>();
  @Input()
  rowData: T;

  @ViewChild(RowTemplateDirective, {static: true}) rowTemplate;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject('OrderItemService') private orderItemService: OrderItemService<T>
  ) {}

  ngOnInit() {
    const viewContainerRef = this.rowTemplate.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<RowComponent<T>>(
      this.orderItemService.getOrderItemRowComponent());
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.rowData = this.rowData;
  }

  public deleteItem() {
    this.deleteRow.emit(this.rowData);
  }

}
