import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];

  ngOnInit(): void {
    this.todoService.loadTodos().subscribe(data => {
      this.todos = data.json();
    });
  }

  constructor(private todoService: TodoService) {
  }
}
