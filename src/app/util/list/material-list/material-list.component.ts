import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../model/material/material';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  @Input()
  materials: Material[];

  constructor() { }

  ngOnInit() {
  }

}
