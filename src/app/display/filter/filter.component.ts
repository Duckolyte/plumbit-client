import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../data/model/material/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  list: Material[];
  filter: string;

  constructor() {
  }

  ngOnInit() {
    this.filter = '';
  }

  filterList() {
    console.log(this.list);
    this.list = this.list.filter(material => material.name.includes(this.filter));
    console.log(this.list);
  }
}
