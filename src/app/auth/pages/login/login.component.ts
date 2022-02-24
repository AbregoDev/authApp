import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { AuthResponse } from '../../interfaces/auth.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent {

    loginForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
    ) { }

    login(): void {
        console.log(this.loginForm.value);

        const { email, password } = this.loginForm.value;

        this.authService.login(email, password)
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
