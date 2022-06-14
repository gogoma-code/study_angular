import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'host-child',
  template: `
    <h3>Component Style: Child</h3>
    <button class="btn-primary">Button</button>
  `,
  styleUrls: ['./host-child.css']
})
export class HostChild {
  
}