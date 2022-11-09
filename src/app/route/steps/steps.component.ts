import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkDescriptionService} from '../../data/service/work-description.service';
import {WorkDescription} from '../../data/model/work-description/work-description';
import {OrderItemListComponent} from '../../display/list/order-item-list/order-item-list.component';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  @ViewChild(OrderItemListComponent, {static: false}) stepListComponents: OrderItemListComponent<WorkDescription>;
  steps: WorkDescription[];

  constructor(private workDescriptionService: WorkDescriptionService) { }

  ngOnInit() {
    this.steps = this.workDescriptionService.getWorkDescriptions();
  }

  filterList(filter: string) {
    this.stepListComponents.updateFilteredList(filter);
  }

  saveSteps(steps: WorkDescription[]) {
    // TODO: check all materials are valid with materialService.isValid(material)
    //  if so update order with materials
    // this.orderService.updateMaterialsOfOrder(materials); // TODO take order as input and save meterials of order.
  }
}
