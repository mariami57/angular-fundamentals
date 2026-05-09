import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todos';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  selectedView: string ='';
  todoService = inject(TodosService);

  markAsCompleted(id: number) {
    const updatedTodos = this.todoService.todoItems().map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    this.todoService.todoItems.set(updatedTodos);
  }


}
