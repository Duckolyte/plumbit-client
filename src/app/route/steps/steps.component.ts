import {Component, OnInit} from '@angular/core';
import {RowItem} from '../../display/list/row/row-item';
import {WorkDescriptionService} from '../../data/service/work-description.service';
import {WorkDescriptionRowComponent} from '../../display/list/row/work-description-row/work-description-row.component';
import {WorkDescriptionRowData} from '../../display/list/row/work-description-row/work-description-row-data';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  workDescriptionRowComponents: RowItem[];

  constructor(private workDescriptionService: WorkDescriptionService) { }

  ngOnInit() {
    this.workDescriptionRowComponents = this.workDescriptionService.getWorkDescriptions().map(desc =>
      new RowItem(
        WorkDescriptionRowComponent,
        {description: desc.description} as WorkDescriptionRowData)
    );
  }
}
