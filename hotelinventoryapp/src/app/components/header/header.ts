import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('My first Angular app');
  // title = 'Not a signal'; // Old way of using variables in Angular templates, now we need to call the signal as a function
}
