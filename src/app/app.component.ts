import { Component } from '@angular/core';
import { KaduTodoListComponent } from './kadu-todo-list/kadu-todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KaduTodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
