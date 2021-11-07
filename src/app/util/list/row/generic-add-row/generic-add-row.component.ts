import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MaterialRowComponent} from '../material-row/material-row.component';
import {WorkDescriptionRowComponent} from '../work-description-row/work-description-row.component';

@Component({
  selector: 'app-generic-add-row',
  templateUrl: './generic-add-row.component.html',
  styleUrls: ['./generic-add-row.component.css']
})
export class GenericAddRowComponent implements OnInit {
  ngOnInit(): void {
  }
  //
  //   //
  //   // TODO read https://angular.io/guide/dynamic-component-loader
  //   //
  //
  //   @ViewChild("modalContainer", { read: ViewContainerRef }) container;
  //   @Input() name;
  //   componentRef: ComponentRef;
  //
  //   listComponent: {
  //     'material': MaterialRowComponent,
  //     'work': WorkDescriptionRowComponent
  //   };
  //
  // constructor(private resolver: ComponentFactoryResolver) { }
  //
  // ngOnInit() {
  //   this.loadComponent(this.name);
  // }
  // loadComponent(type) {
  //   this.container.clear();
  //   const factory = this.resolver.resolveComponentFactory(this.listComponent[this.name]);
  //
  //   this.componentRef = this.container.createComponent(factory);
  //
  //   this.componentRef.instance.type = type;
  //
  //   this.componentRef.instance.output.subscribe(event => console.log(event));
  //
  // }
  //
  // ngOnDestroy() {
  //   this.componentRef.destroy();
  // }

}
