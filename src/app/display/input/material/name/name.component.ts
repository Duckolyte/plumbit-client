import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../data/model/material/material';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input()
  material: Material;

  constructor() { }

  ngOnInit() {
  }

}
