import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../model/material/material';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements OnInit {

  @Input()
  material: Material;

  constructor() { }

  ngOnInit() {
  }

}
