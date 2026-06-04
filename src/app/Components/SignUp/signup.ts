import { ParseSourceFile } from '@angular/compiler';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './signup.html',
    styleUrls: ['./signup.css']
})
export class SignUp {



    username: string = '';
    password: string = '';
    email: string = '';

    signupForm: FormGroup;

    constructor(private builder: FormBuilder, private router: Router) {
        this.signupForm = this.builder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    submit() {
        if (this.signupForm.invalid) {
            this.signupForm.markAllAsTouched();
            return;
        }
    }

    signUp() {

        if (this.signupForm.invalid) {
            this.signupForm.markAllAsTouched();
            return;
        }

        const user = {
            username: this.signupForm.value.username,
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
        };

        localStorage.setItem('username', user.username);
        localStorage.setItem('email', user.email);
        localStorage.setItem('password', user.password);

        this.router.navigate(['/login']);
    }
}