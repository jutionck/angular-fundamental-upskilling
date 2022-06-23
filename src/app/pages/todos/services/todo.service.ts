import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  getAll(): Todo[] | undefined {
    const todoValue: string | null = this.storage.getItem('todos');
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
    const todoValue: string = this.storage.getItem('todos') as string;
    try {
      let todos: Todo[] = todoValue ? JSON.parse(todoValue) : [];
      todos = todos.filter((todo) => todo.id !== id);
      this.storage.setItem('todos', JSON.stringify(todos))
    } catch (err){
      console.log(err);
    }
  }

  getTodoById(id: number): Todo | undefined {
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
}
