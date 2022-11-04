import { Component } from '@angular/core';
import {MaterialUnit} from './data/model/material/material-unit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompanyName'; // TODO get name from service

  materials = [
    {
      count: 1,
      unit: MaterialUnit.PIECE,
      name: 'test material 1'
    },
    {
      count: 3,
      unit: MaterialUnit.METER,
      name: 'test material 2'
    },
    {
      count: 15,
      unit: MaterialUnit.PIECE,
      name: 'test material 3'
    }
  ];

}
