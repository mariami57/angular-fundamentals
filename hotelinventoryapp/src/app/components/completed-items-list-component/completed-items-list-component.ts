import { Component, inject, input } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-completed-items-list-component',
  imports: [],
  templateUrl: './completed-items-list-component.html',
  styleUrl: './completed-items-list-component.css',
})
export class CompletedItemsListComponent {
  todoService = inject(TodosService);
}