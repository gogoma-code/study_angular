import { Component } from '@angular/core';

@Component({
  selector: 'single-content-projection',
  template: `
    <h3>Single-slot content projection</h3>
    <div>
      <ng-content></ng-content>
    <div>
  `
})
export class SingleContentProjectionComponent {}