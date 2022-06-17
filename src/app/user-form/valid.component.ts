import { Component } from '@angular/core';

@Component({
    selector: 'valid',
    template: `
    <input type="text" name="title" ngModel #title="ngModel" pattern="[a-zA-Z0-9]{4,10}" required />

    <em *ngIf="title.errors?.['required'] && title.touched">
      title을 입력하세요!
    </em>
    <em *ngIf="title.errors?.['pattern'] && title.touched">
      title은 영문 또는 숫자로 4자리 이상 10이하로 입력하세요!
    </em>

    <p>errors:  {{ title.errors | json }}</p>
    <p>invalid: {{ title.invalid }}</p>
    <p>dirty:   {{ title.dirty }}</p>
    <p>touched: {{ title.touched }}</p>
    <p>pristine: {{ title.pristine }}</p>
    `
})
export class VlidComponent { 

}