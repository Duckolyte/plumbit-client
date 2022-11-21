import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
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
