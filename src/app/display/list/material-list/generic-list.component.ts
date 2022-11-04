import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row/row-component';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent<T extends RowComponent<any>> implements OnInit {

  @Input()
  rows: T[];

  constructor() { }

  ngOnInit() {
  }

}
