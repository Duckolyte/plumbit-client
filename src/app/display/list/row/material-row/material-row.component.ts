import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../../data/model/material/material';
import {RowComponent} from '../row-component';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements RowComponent<Material>, OnInit {

  @Output()
  deleteMaterial: EventEmitter<Material> = new EventEmitter<Material>();
  rowData: Material;

  @Input()
  material: Material;

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    this.deleteMaterial.emit(this.material);
  }
}
