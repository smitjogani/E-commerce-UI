import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from '../../../State/Auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router, 
    private authService: AuthService
  ) {}

  signupForm: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submitForm(): void {
    if (this.signupForm.valid) {
      this.authService.register(this.signupForm.value);
      console.log('Signup Data : ', this.signupForm.value);
    }
  }

  navigateLogin(path: any) {
    this.router.navigate([path]);
  }
}
