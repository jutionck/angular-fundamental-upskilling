import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../../shared/models/response.model';
import { LoginResponse, RegisterResponse } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  wrongCredential: boolean = false
  message: string = '';
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  onSubmit(): void {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe((response: ApiResponse<LoginResponse>) => {
          this.isAlert()
          sessionStorage.setItem('token', response.data.accessToken)
          this.router.navigateByUrl('/').then(r => "")
        }, console.error)
    }
  }

  isAlert(): void {
    this.wrongCredential = !this.wrongCredential
    this.message = 'Email atau password salah.';
  }

}
