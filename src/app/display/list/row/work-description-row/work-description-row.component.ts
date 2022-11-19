import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
import {WorkDescriptionRowData} from './work-description-row-data';
import {ServableRow} from '../servable-row';
import {WorkDescriptionService} from '../../../../data/service/work-description.service';
import {WorkDescription} from '../../../../data/model/work-description/work-description';

@Component({
  selector: 'app-work-description-row',
  templateUrl: './work-description-row.component.html',
  styleUrls: ['./work-description-row.component.css']
})
export class WorkDescriptionRowComponent implements RowComponent<WorkDescription>, OnInit {

  @Input()
  rowData: WorkDescription;

  constructor() { }

  ngOnInit() {
  }

}
