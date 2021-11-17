import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row-component';
import {WorkDescriptionRowData} from './work-description-row-data';
import {ServableRow} from '../servable-row';
import {WorkDescriptionService} from '../../../../service/work-description.service';

@Component({
  selector: 'app-work-description-row',
  templateUrl: './work-description-row.component.html',
  styleUrls: ['./work-description-row.component.css']
})
export class WorkDescriptionRowComponent implements RowComponent<WorkDescriptionRowData>, ServableRow, OnInit {

  @Input()
  rowData: WorkDescriptionRowData;

  constructor(private workDescriptionService: WorkDescriptionService) { }

  ngOnInit() {
  }

  getService(): WorkDescriptionService {
    return this.workDescriptionService;
  }

}
