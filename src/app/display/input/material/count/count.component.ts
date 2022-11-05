import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../data/model/material/material';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input()
  material: Material;
  label: string;

  constructor() { }

  ngOnInit() {
    this.label = 'Quantity';
  }

}
