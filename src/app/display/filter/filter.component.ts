import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output()
  filterChange: EventEmitter<string> = new EventEmitter<string>();
  filter: string;

  constructor() {
  }

  ngOnInit() {
    this.filter = '';
  }

  filterList() {
    this.filterChange.emit(this.filter);
  }
}
