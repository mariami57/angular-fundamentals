import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  // templateUrl: './app.html',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    
  `,
  // styleUrl: './app.css'
  styles: `
    main {
      padding: 16px;
    }
  `
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
