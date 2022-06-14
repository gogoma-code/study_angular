import { Component } from '@angular/core';

@Component({
  selector: 'multi-content-projection',
  template: `
    <h3>Multi-slot content projection</h3>

    <ng-content select="header"></ng-content>
    <ng-content select="section"></ng-content>
    <ng-content select=".my-class"></ng-content>
    <ng-content select="footer"></ng-content>
  `
})
export class MultiContentProjectionComponent {}