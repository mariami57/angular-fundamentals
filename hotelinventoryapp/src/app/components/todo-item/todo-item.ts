import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input.required<Todo>();
  completed = output<Todo>();

  markComplete(){
    this.completed.emit({...this.todo(), completed: true});
  }
}
