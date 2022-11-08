import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../data/model/material/material';
import {MaterialService} from '../../../data/service/material.service';


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
    if (this.isEmpty(this.materials) || this.hasCompleteFirstRecord()) {
      this.materials.unshift(new Material());
      this.updateFilteredList(this.filter);
    }
  }

  private isEmpty(materials: Material[]) {
    return materials.length < 1;
  }

  private hasCompleteFirstRecord() {
    return this.materialService.isValid(this.materials[0]);
  }

  updateFilteredList(filter: string) {
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
    this.updateFilteredList(this.filter);
  }
}
