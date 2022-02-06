import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor(private formBuilder: FormBuilder) { }

  login(): void {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
  }

}
