import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  // templateUrl: './app.html',
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
    </main>
    <router-outlet></router-outlet>
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
