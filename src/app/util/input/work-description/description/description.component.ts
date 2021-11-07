import {Component, Input, OnInit} from '@angular/core';
import {WorkDescriptionRowData} from '../../../list/row/work-description-row/work-description-row-data';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input()
  workDescription: WorkDescriptionRowData;

  constructor() { }

  ngOnInit() {
  }

}
