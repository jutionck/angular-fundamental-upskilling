import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../../shared/models/response.model';
import { RegisterResponse } from '../../models/auth.model';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegister: boolean = false
  message: string = '';
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  onSubmit(): void {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe((response: ApiResponse<RegisterResponse>) => {
          this.isAlert()
          this.router.navigateByUrl('/auth/login').then(r => "")
        }, console.error)
    }
  }

  isAlert(): void {
    this.isRegister = !this.isRegister
    this.message = 'Register berhasil, silahkan login.';
  }

}
