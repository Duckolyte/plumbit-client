import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../../data/model/material/material';
import {MaterialService} from '../../../../data/service/material.service';

@Component({
  selector: 'app-material-row',
  templateUrl: './material-row.component.html',
  styleUrls: ['./material-row.component.css']
})
export class MaterialRowComponent implements OnInit {

  @Input()
  material: Material;

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
  }

  cancelItem() {
    this.materialService.delete(this.material);
  }
}
