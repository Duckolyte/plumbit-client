import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rowTemplate]',
})
export class RowTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
