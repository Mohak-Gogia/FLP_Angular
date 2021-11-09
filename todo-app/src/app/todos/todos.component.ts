import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  inputTodo:string = "";

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.todos = this.todoservice.fetchTodo();
  }

  addTodo () {
    let new_todo = new Todo;
    new_todo.content = this.inputTodo;
    new_todo.completed = false;
    this.todoservice.addTodo(new_todo);
    this.inputTodo = "";
  }


  deleteTodo(id: number){
    this.todoservice.deleteTodo(id);
    this.todos =  this.todoservice.fetchTodo();
  }

}
