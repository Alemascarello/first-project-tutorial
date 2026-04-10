import { Component } from '@angular/core';
import { AleTodoListComponent } from './components/ale-todo-list/ale-todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AleTodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
