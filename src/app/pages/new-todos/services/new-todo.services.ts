import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/response.model';
import { NewTodo } from '../models/new-todo.model';
import { CodeServices } from '../../../shared/types/enum.types';

@Injectable({
  providedIn: 'root'
})
export class NewTodoService {

  constructor(private readonly http: HttpClient) { }

  public list(): Observable<ApiResponse<NewTodo[]>> {
    const token: string = sessionStorage.getItem('token') as string;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<ApiResponse<NewTodo[]>>(CodeServices.GET_LIST_TODO, {headers})
  }

  public get(id: string): Observable<ApiResponse<NewTodo>>{
    return this.http.get<ApiResponse<NewTodo>>(CodeServices.GET_TODO+`/${id}`)
  }

  public save(payload: NewTodo): Observable<ApiResponse<NewTodo>>{
    if(payload.id) {
      return this.http.put<ApiResponse<NewTodo>>(CodeServices.PUT_TODO, payload)
    }

    return this.http.post<ApiResponse<NewTodo>>(CodeServices.POST_TODO, payload)
  }

  public delete(id: string): Observable<ApiResponse<NewTodo>>{
    return this.http.delete<ApiResponse<NewTodo>>(CodeServices.DELETE_TODO+`/${id}`)
  }
}
