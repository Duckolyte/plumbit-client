import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
import {MaterialRowData} from './material-row-data';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements RowComponent<MaterialRowData>, OnInit {

  @Input()
  rowData: MaterialRowData;

  constructor() { }

  ngOnInit() {
  }

}
