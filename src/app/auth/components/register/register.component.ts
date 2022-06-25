import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../../shared/models/response.model';
import { RegisterResponse } from '../../models/auth.model';
import { Router } from '@angular/router';
import { log } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertMessage } from '../../../shared/models/alert-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  alert: AlertMessage
  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
  })

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe((response: ApiResponse<RegisterResponse>) => {
          if (response.code === 201) {
            this.displayAlert(response.message, 'success')
          }
        }, console.error)
    }
    this.registerForm.reset()
  }

  private displayAlert(message: string, status: 'info' | 'success' | 'warning' | 'danger'): void {
    this.alert = {status, text: message};
  }
}
