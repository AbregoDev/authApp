import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { AuthResponse } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.registerForm.value);
    
    const { name, email, password } = this.registerForm.value;

        this.authService.register(name, email, password)
            .subscribe(resp => {
                console.log(resp);

                if (resp === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                    // TODO: Mostrar mensaje
                    Swal.fire({
                        title: 'Error!',
                        text: (resp as AuthResponse).msg,
                        icon: 'error',
                    })
                }
            });
  }

}
