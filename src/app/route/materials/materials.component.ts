import {Component, OnInit, ViewChild} from '@angular/core';
import {MaterialService} from '../../data/service/material.service';
import {Material} from '../../data/model/material/material';
import {MaterialListComponent} from '../../display/list/material-list/material-list.component';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  @ViewChild(MaterialListComponent, {static: false}) materialListComponent: MaterialListComponent;
  materials: Material[];

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materials = this.materialService.getMaterials();
  }

  filterList(filter: string) {
    this.materialListComponent.filterList(filter);
  }

  saveMaterials(materials: Material[]) {
    // this.orderService.updateMaterialsOfOrder(materials); // TODO take order as input and save meterials of order.
  }
}
