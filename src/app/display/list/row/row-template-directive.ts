import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRowTemplate]'
})
export class RowTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
