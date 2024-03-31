import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../auth.service';
import { log } from 'console';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Hazır api kullanıldı.
  // Kullanıcı şifresi ve username kullanarak giriş yapabilirsiniz.
  // https://fakeapi.platzi.com/en/rest/auth-jwt/
  // username : john@mail.com,
  // password : changeme
  email: string = '';
  password: string = '';
  authService = inject(AuthService);
  router = inject(Router);


  user?:any;

  login() {
    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe(() => {
        this.router.navigate(['main'])
      
      });
  }
}
