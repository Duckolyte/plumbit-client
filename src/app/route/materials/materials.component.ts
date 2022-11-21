import {Component, OnInit, ViewChild} from '@angular/core';
import {MaterialService} from '../../data/service/material.service';
import {Material} from '../../data/model/material/material';
import {MaterialListComponent} from '../../display/list/material-list/material-list.component';
import {ActiveServiceConfigService, MaterialServiceConfig} from '../../data/service/active-service-config.service';
import {OrderItemListComponent} from '../../display/list/order-item-list/order-item-list.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  @ViewChild(OrderItemListComponent, {static: false}) materialListComponent: OrderItemListComponent<Material>;
  materials: Material[];

  constructor(private materialService: MaterialService, private activeServiceConfig: ActiveServiceConfigService) {
    this.activeServiceConfig.activeServiceConfig = MaterialServiceConfig;
  }

  ngOnInit() {
    this.materials = this.materialService.getAll();
  }

  filterList(filter: string) {
    this.materialListComponent.updateFilteredList(filter);
  }

  saveMaterials(materials: Material[]) {
    // TODO: check all materials are valid with materialService.isValid(material)
    //  if so update order with materials
    // this.orderService.updateMaterialsOfOrder(materials); // TODO take order as input and save meterials of order.
  }
}
