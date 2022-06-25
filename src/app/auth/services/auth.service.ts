import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse, Register, RegisterResponse } from '../models/auth.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../shared/models/response.model';
import { CodeServices } from '../../shared/types/enum.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  public register(payload: Register): Observable<ApiResponse<RegisterResponse>> {
    try {
      return this.http.post<ApiResponse<RegisterResponse>>(CodeServices.AUTH_REGISTER, payload)
    } catch (err) {
      throw err
    }
  }

  public login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    try {
      return this.http.post<ApiResponse<LoginResponse>>(CodeServices.AUTH_LOGIN, payload)
    } catch (err) {
      throw err
    }
  }
}
