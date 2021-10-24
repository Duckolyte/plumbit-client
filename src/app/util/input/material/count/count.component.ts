import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../model/material/material';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  @Input()
  material: Material;

  constructor() { }

  ngOnInit() {
  }

}
