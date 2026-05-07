import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { TodoItem } from '../components/todo-item/todo-item';
import { CompletedItemsListComponent } from '../components/completed-items-list-component/completed-items-list-component';
import { HighPriorityTodosComponent } from './high-priority-todos-component/high-priority-todos-component';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, CompletedItemsListComponent, HighPriorityTodosComponent],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todoService = inject(TodosService);
  

  markComplete(todo: Todo) {
    this.todoService.todoItems.update(items => 
      items.map(t => t.id === todo.id ? { ...t, completed: true} : t)
     );
  }

}
