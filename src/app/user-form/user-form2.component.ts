import { Component } from '@angular/core';

@Component({
    selector: 'user-form2',
    template: `
        <counter [(count)]="value"></counter>
        <p>value: {{ value }}</p>

        <valid></valid>
    `
})
export class UserForm2Component {    
    value = 10;
}