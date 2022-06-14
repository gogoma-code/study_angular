import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'host-parent',
  template: `
    <h3>Component Style: Parent</h3>
    <button class="btn-primary">Button</button>
    <div class="theme-red">
      <host-child class="active"></host-child>
    </div>
  `,
  styleUrls: ['./host-parent.css']
})
export class HostParent {
  
}