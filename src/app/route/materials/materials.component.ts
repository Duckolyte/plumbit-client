import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../../data/service/material.service';
import {Material} from '../../data/model/material/material';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.materials = this.materialService.getMaterials();
  }

}
