import { Component, inject, input } from '@angular/core';
import { TodosService } from '../../services/todos';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-high-priority-todos-component',
  imports: [],
  templateUrl: './high-priority-todos-component.html',
  styleUrl: './high-priority-todos-component.css',
})
export class HighPriorityTodosComponent {
  todoService = inject(TodosService);

  markComplete(todo: Todo) {
    this.todoService.todoItems.update(items =>
      items.map(t => t.id === todo.id ? { ...t, completed: true } : t)
    );
  }
}
