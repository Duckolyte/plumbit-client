import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
import {MaterialRowData} from './material-row-data';
import {ServableRow} from '../servable-row';
import {MaterialService} from '../../../../service/material.service';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements RowComponent<MaterialRowData>, ServableRow, OnInit {

  @Input()
  rowData: MaterialRowData;

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
  }

  getService(): MaterialService {
    return this.materialService;
  }

}
