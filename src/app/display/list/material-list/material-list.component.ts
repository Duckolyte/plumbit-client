import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../data/model/material/material';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  @Input() materials: Material[];
  subheader: string;

  constructor() {
  }

  ngOnInit() {
    this.subheader = 'Materials';
  }

  addItem() {
    this.materials.push(new Material());
  }
}
