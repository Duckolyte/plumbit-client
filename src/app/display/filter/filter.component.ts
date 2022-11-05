import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../data/model/material/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  materials: Material[];
  filter: string;

  constructor() {
  }

  ngOnInit() {
    this.filter = '';
  }

  filterList() {
    this.materials = this.materials.filter(material => material.name === this.filter);
  }
}
