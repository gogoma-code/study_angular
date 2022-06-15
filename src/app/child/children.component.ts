import { Component, Input } from '@angular/core';
import { Checkbox } from '../app1/app.component'

@Component({
  selector: 'children',
  template: `
    <input type="checkbox"
      [id]="checkbox.id"
      [checked]="checkbox.checked">
    <label [for]="checkbox.id">
      {{ checkbox.label }}
    </label>
  `
})
export class ChildrenComponent {
  // 부모 컴포넌트가 직접 접근할 프로퍼티
  @Input() checkbox!: Checkbox;
}
