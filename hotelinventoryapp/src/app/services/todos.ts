import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [{
    title: 'Todo 1',
    completed: false,
    userId: 1,
    id: 1
  }, 
  {
    title: 'Todo 2',
    completed: true,
    userId: 1,
    id: 2
  },

  {
    title: 'Todo 3',
    completed: false,
    userId: 1,
    id: 3
  },
];

  constructor() { }
}
