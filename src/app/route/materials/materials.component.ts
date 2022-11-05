import {Component, OnInit} from '@angular/core';
import {RowItem} from '../../display/list/row/row-item';
import {MaterialService} from '../../data/service/material.service';
import {MaterialRowComponent} from '../../display/list/row/material-row/material-row.component';
import {MaterialRowData} from '../../display/list/row/material-row/material-row-data';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materialRowComponents: RowItem[];

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materialRowComponents = this.materialService.getMaterials().map(mat =>
      new RowItem(
        MaterialRowComponent,
        {material: mat} as MaterialRowData)
    );
  }

}
