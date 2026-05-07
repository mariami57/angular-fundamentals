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
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  completedItems = computed(() =>
    this.todoItems().filter(t => t.completed));

  markComplete(todo: Todo) {
    this.todoItems.update(items => 
      items.map(t => t.id === todo.id ? { ...t, completed: true} : t)
     );
  }

  highPriorityTodos = computed(() => this.todoItems().filter(t => t.priority === 'high'));

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}
