import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../data/model/material/material';
import {RowComponent} from '../row-component';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements RowComponent<Material>, OnInit {

  @Input()
  rowData: Material;

  constructor() {
  }

  ngOnInit() {
  }
}
