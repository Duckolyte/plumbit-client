import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();
  filter: string;

  constructor() {
  }

  ngOnInit() {
    this.filter = '';
  }

  filterList() {
    this.onChange.emit(this.filter);
  }
}
