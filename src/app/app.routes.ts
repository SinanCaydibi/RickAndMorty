import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
   
    { path: 'main', component: MainboardComponent , canActivate:[authGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', component: SignUpComponent },
    { path: 'details/:id', component: DetailsComponent , canActivate:[authGuard]},
 






];
