import { Component, OnInit } from '@angular/core';
import {MaterialRowComponent} from '../list/row/material-row/material-row.component';
import {WorkDescriptionRowComponent} from '../list/row/work-description-row/work-description-row.component';
import {MaterialService} from '../../data/service/material.service';
import {WorkDescriptionService} from '../../data/service/work-description.service';
import {RowItem} from '../list/row/row-item';
import {MaterialRowData} from '../list/row/material-row/material-row-data';
import {WorkDescriptionRowData} from '../list/row/work-description-row/work-description-row-data';

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
