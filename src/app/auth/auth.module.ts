import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
