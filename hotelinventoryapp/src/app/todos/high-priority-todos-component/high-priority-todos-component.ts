import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-high-priority-todos-component',
  imports: [],
  templateUrl: './high-priority-todos-component.html',
  styleUrl: './high-priority-todos-component.css',
})
export class HighPriorityTodosComponent {
  highPriorityTodos = input.required<Todo[]>();
}
