// dynamic-component.directive.ts
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComponent]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}