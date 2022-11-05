import {Component, Input, OnInit} from '@angular/core';
import {RowComponent} from '../row/row-component';

@Component({
  selector: 'app-typed-list',
  templateUrl: './typed-list.component.html',
  styleUrls: ['./typed-list.component.css']
})
export class TypedListComponent<T extends RowComponent<any>> implements OnInit {

  @Input()
  rows: T[];

  constructor() { }

  ngOnInit() {
  }

}
