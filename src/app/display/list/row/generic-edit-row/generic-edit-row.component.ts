import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {RowComponent} from '../row-component';
import {RowTemplateDirective} from '../row-template-directive';
import {RowItem} from '../row-item';
import {RowData} from '../row-data';

@Component({
  selector: 'app-generic-edit-row',
  templateUrl: './generic-edit-row.component.html',
  styleUrls: ['./generic-edit-row.component.css']
})
export class GenericEditRowComponent<T extends RowItem> implements OnInit {

  @Input()
  row: T;

  @ViewChild(RowTemplateDirective, {static: true})
  rowTemplate!: RowTemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const viewContainerRef = this.rowTemplate.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<RowComponent<RowData>>(
      this.componentFactoryResolver.resolveComponentFactory(this.row.component));
    componentRef.instance.rowData = this.row.rowData;
  }
}
