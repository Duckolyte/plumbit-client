import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../data/model/material/material';
import {OrderService} from '../../../data/service/order.service';
import {MaterialService} from '../../../data/service/material.service';
import {materialize} from 'rxjs/operators';


@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  @Output() saveMaterials: EventEmitter<Material[]> = new EventEmitter<Material[]>();
  @Input() materials: Material[];
  viewedMaterials: Material[];
  subheader: string;
  private filter = '';

  constructor(private materialService: MaterialService) {
  }

  ngOnInit() {
    this.subheader = 'Materials';
    this.viewedMaterials = this.materials;
  }

  addItem() {
    if (this.hasIncompleteFirstRecord()) {
      this.materials.unshift(new Material());
      this.filterList(this.filter);
    }
  }

  private hasIncompleteFirstRecord() {
    return this.materialService.isValid(this.materials[0]);
  }

  filterList(filter: string) {
    this.filter = filter;
    this.viewedMaterials = this.materials
      .filter(material => this.materialService.isNotValid(material) || material.name.includes(filter));
  }

  submit() {
    if (this.materialsAreValid()) {
      this.saveMaterials.emit(this.materials);
    }
  }

  private materialsAreValid() {
    return this.materials.filter(material => !this.materialService.isValid(material)).length < 1;
  }

  deleteMaterial(material: Material) {
    this.materials.splice(this.materials.indexOf(material), 1);
    this.filterList(this.filter);
  }
}
