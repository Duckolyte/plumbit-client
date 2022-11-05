import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../data/model/material/material';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input()
  material: Material;
  label: string;

  constructor() { }

  ngOnInit() {
    this.label = 'Unit';
  }

}
