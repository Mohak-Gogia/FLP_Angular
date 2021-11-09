import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[]

  constructor() { 
    this.todos = [
      {
        content: "Learn Angular",
        completed: false
      },
      {
        content: "Learn C#",
        completed: false
      },
      {
        content: "Learn Dot Net",
        completed: true
      }
    ]
  }

  fetchTodo(){
    return this.todos;
  }

  addTodo (newtodo : Todo) {
    this.todos.push(newtodo);
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
