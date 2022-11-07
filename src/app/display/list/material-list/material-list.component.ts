import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../data/model/material/material';


@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  @Input() materials: Material[];
  viewedMaterials: Material[];
  subheader: string;

  constructor() {
  }

  ngOnInit() {
    this.subheader = 'Materials';
    this.viewedMaterials = this.materials;
  }

  addItem() {
    if (this.materials.length > 0 && this.materials[0].name) {
      this.materials.unshift(new Material());
    }
  }

  filterList(filter: string) {
    this.viewedMaterials = this.materials
      .filter(material => material.name)
      .filter(material => material.name.includes(filter));
  }
}
