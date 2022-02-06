import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  login(): void {
    console.log(this.loginForm.value);

    this.router.navigate(['/dashboard']);
  }

}
