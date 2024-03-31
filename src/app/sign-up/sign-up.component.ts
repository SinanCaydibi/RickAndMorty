import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule,FormsModule,ReactiveFormsModule],

  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  private a = inject(AuthService);
  private router = inject(Router);


  user = {
    username: this.username,
    password: this.password,
    email: this.email,
  };

  signup() {
    this.a.signup(this.user);
    this.router.navigateByUrl("login")

  }
}
