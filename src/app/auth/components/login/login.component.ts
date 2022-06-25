import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../../shared/models/response.model';
import { LoginResponse, RegisterResponse } from '../../models/auth.model';
import { AlertMessage } from '../../models/alert-message';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  alert: AlertMessage
  loading: boolean = false;
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
    this.loading = true;
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe((response: ApiResponse<LoginResponse>) => {
          sessionStorage.setItem('token', response.data.accessToken)
          this.router.navigateByUrl('/home').then(r => "")
        },(errorResponse: HttpErrorResponse) => {
          this.loading = false;
          if(errorResponse.error) {
            if(errorResponse.status === 403) {
              this.displayAlert('Anda tidak punya sesi', 'danger');
            } else {
              this.displayAlert('Maaf email dan password salah', 'warning');
            }
          }
        })
    }
  }

  private displayAlert(message: string, status: 'info' | 'success' | 'warning' | 'danger'): void {
    this.alert = { status, text: message };
    this.loading = false
  }

}
