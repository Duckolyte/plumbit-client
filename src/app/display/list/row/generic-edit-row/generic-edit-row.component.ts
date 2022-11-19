import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {OrderItem} from '../../../../data/model/order-item';
import {RowTemplateDirective} from '../row-template-directive';
import {OrderItemService} from '../../../../data/service/order-item-service';
import {RowComponent} from '../row-component';

@Component({
  selector: 'app-generic-edit-row',
  templateUrl: './generic-edit-row.component.html',
  styleUrls: ['./generic-edit-row.component.css']
})
export class GenericEditRowComponent<T extends OrderItem> implements OnInit {

  @Input()
  rowData: T;

  @ViewChild(RowTemplateDirective, {static: true}) rowTemplate;

  constructor(/*private componentFactoryResolver: ComponentFactoryResolver, private orderItemService: OrderItemService<T>*/) {
  }

  ngOnInit() {
/*    const viewContainerRef = this.rowTemplate.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<RowComponent<T>>(
      this.orderItemService.getOrderItemRowComponent());
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.rowData = this.rowData;*/
  }
}
