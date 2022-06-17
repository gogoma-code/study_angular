import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidator } from './password-validator';

@Component({
    selector: 'app-reactive',
    template: `
        <form [formGroup]="userForm" novalidate>
            <div>
                <input type="text" formControlName="userid" placeholder="user id" />
            </div>
            <div formGroupName="passwordGroup">
                <div>
                    <input type="password" formControlName="password" placeholder="password" />
                </div>
                <div>
                    <input type="password" formControlName="confirmPassword" placeholder="confirm password" />
                </div>
            </div>
        </form>
        <pre>{{ userForm.value | json }}</pre>
        <pre>{{ userForm.status }}</pre>
        <pre>{{ userForm.controls['passwordGroup'].errors?.['match'] | json }}</pre>

        <form [formGroup]="userForm2" novalidate>
            <div formArrayName="hobbies">
                <div *ngFor="let hobbies of hobbies.controls; let i=index">
                    <input type="text" [formControlName]="i" />
                </div>
            </div>
        </form>
        <pre>{{ userForm2.value | json }}</pre>
        <pre>{{ userForm2.status }}</pre>
    `
})
export class ReactiveComponent {
    userForm: FormGroup;
    userForm2: FormGroup;

    ngOnInit() {
      this.userForm = new FormGroup({
        userid: new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z0-9]{4,10}') ]),
        passwordGroup: new FormGroup({
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        }, PasswordValidator.match)
      });

      this.userForm2 = new FormGroup({
        hobbies: new FormArray([
            new FormControl(''),
            new FormControl('')
        ])
      })
      console.log(this.userForm);
    }

    get hobbies(): FormArray {
        return this.userForm2.get('hobbies') as FormArray;
    }
}