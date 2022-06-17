import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'user-form-exam',
  templateUrl: './user-form.html',
  styles: [ `.alert { color: red; }` ]
})
export class UserFormExamComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    /*
    this.userForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }, PasswordValidator.match),
      hobbies: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    });
    */

    this.userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match }),
      hobbies: this.fb.array(['', ''])
    })
  }

  // 템플릿에서 폼 모델에 접근할 수 있도록 컴포넌트 클래스에 getter를 정의한다.
  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
  }
}
