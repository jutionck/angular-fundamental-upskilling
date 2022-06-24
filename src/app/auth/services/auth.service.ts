import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse, Register, RegisterResponse } from '../models/auth.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  public register(data: Register): Observable<ApiResponse<RegisterResponse>> {
    return this.http.post<ApiResponse<RegisterResponse>>('/api/v1/auth/register', data)
  }

  public login(data: Login): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>('/api/v1/auth/login', data)
  }
}
