import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'user-form',
    template: `
        <form #f="ngForm" (ngSubmit)="onNgSubmit(f.value)" novalidate>
            <input type="text" [(ngModel)]="userid" name="userid" placeholder="userid" (ngModelChange)="userid=$event">
            
            <div ngModelGroup="password">
                <input type="password" name="password1" placeholder="password" ngModel>
                <input type="password" name="password2" placeholder="confirm password" ngModel>
            </div>
            <button>submit</button>
        </form>

        <p>useid value: {{ userid }}</p>
        <p>password check: {{ passwordValidMsg }}</p>
    `
})
export class UserFormComponent {
    userid = '';
    passwordValidMsg = '';
    
    onNgSubmit(user: any) {
        console.log(user);

        if(user.password.password1 !== user.password.password2) {
            this.passwordValidMsg = 'Password must be at least ' + user.password.password1 + ' and ' + user.password.password2;
        }
    }
}