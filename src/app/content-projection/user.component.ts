import { Component } from '@angular/core';

@Component({
  selector: 'user2',
  template: `
    <p [style.background-color]="color">
      <ng-content></ng-content>
    </p>
  `
})
export class User2Component {
  colors = [ 'yellow', 'chartreuse', 'crimson' ];
  color = this.colors[0];

  randomizeColor() {
    this.color = this.colors[Math.floor(Math.random() * 3)];
  }
}