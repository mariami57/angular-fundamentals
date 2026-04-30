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
    <app-home></app-home>
    <h1>Welcome to Maria's first Angular App!</h1>
    <p>Hello world!</p>
    <router-outlet></router-outlet>
  `,
  // styleUrl: './app.css'
  styles: `
    h1 {
      color: #ff4081;
    }
  `
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
