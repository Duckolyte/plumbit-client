import {Component, Input, OnInit} from '@angular/core';
import {WorkDescription} from '../../../../data/model/work-description/work-description';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input()
  workDescription: WorkDescription;
  label: string;

  constructor() { }

  ngOnInit() {
    this.label = 'Description';
  }

}
