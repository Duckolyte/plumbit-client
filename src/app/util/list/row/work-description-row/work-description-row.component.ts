import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
import {WorkDescriptionRowData} from './work-description-row-data';

@Component({
  selector: 'app-work-description-row',
  templateUrl: './work-description-row.component.html',
  styleUrls: ['./work-description-row.component.css']
})
export class WorkDescriptionRowComponent implements RowComponent<WorkDescriptionRowData>, OnInit {

  @Input()
  rowData: WorkDescriptionRowData;

  constructor() { }

  ngOnInit() {
  }

}
