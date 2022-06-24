import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  getAll(): Todo[] {
    const todoValue: string = this.storage.getItem('todos');
    try {
      const todos: Todo[] = todoValue ? JSON.parse(todoValue) : []
      this.todos = todos;
      this.updateSessionStorage()
      return todos;
    } catch (error) {
      console.log(error);
    }
  }

  saveTodo(todo: Todo): void {
    try {
      if(!todo.id) {
        todo.id = this.todos.length < 1 ? 1 : this.todos[this.todos.length - 1].id + 1;
        this.todos.push(todo)
      } else {
        this.todos.forEach((item, index) => {
          if(item.id === todo.id) {
            this.todos.splice(index, 1, todo)
          }
        })
      }
      this.updateSessionStorage()
    } catch (err) {
      console.log(err);
    }
  }

  deleteTodo(id: number): void {
   try {
     const todoId: number = this.todos.findIndex(item => item.id === id);
     this.todos.splice(todoId, 1);
     this.updateSessionStorage()
   } catch (error) {
     console.error(error);
   }
  }

  getTodoById(id: number): Todo {
    try {
      return this.todos.find(item => item.id === id);
    } catch (err) {
      console.log(err);
    }
  }

  checkedTodo(todo: Todo): void {
    try {
      this.todos.forEach(item => {
        if (item.id === todo.id) {
          item.isDone = !item.isDone;
          this.updateSessionStorage()
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  private updateSessionStorage(): void {
    sessionStorage.setItem('todos', JSON.stringify(this.todos))
  }

  // HTTP
  /*
  * url: https://ebb2-118-99-107-91.ap.ngrok.io/
  * 1. Register -> https://ebb2-118-99-107-91.ap.ngrok.io/api/v1/auth/register
  * 2. Login -> https://ebb2-118-99-107-91.ap.ngrok.io/api/v1/auth/login
  * 3. Payload: {"email": "", "password": "" }
  *
  * 4. UrlTodo -> https://ebb2-118-99-107-91.ap.ngrok.io/api/v1/todos
  * */
}
