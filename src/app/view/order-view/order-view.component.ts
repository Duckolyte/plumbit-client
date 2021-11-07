import { Component, OnInit } from '@angular/core';
import {MaterialRowComponent} from '../../util/list/row/material-row/material-row.component';
import {WorkDescriptionRowComponent} from '../../util/list/row/work-description-row/work-description-row.component';
import {MaterialService} from '../../service/material.service';
import {WorkDescriptionService} from '../../service/work-description.service';
import {RowItem} from '../../util/list/row/row-item';
import {MaterialRowData} from '../../util/list/row/material-row/material-row-data';
import {WorkDescriptionRowData} from '../../util/list/row/work-description-row/work-description-row-data';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  materialRowComponents: RowItem[];
  workDescriptionRowComponents: RowItem[];

  constructor(private materialService: MaterialService, private workDescriptionService: WorkDescriptionService) { }

  ngOnInit() {
    this.materialRowComponents = this.materialService.getMaterials().map(mat =>
      new RowItem(
        MaterialRowComponent,
        {material: mat} as MaterialRowData)
    );

    this.workDescriptionRowComponents = this.workDescriptionService.getWorkDescriptions().map(desc =>
      new RowItem(
        WorkDescriptionRowComponent,
        {description: desc.description} as WorkDescriptionRowData)
    );
  }

}
