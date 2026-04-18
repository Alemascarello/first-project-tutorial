import { Component } from '@angular/core';
import { AleTodoListComponent } from './components/ale-todo-list/ale-todo-list.component';
import { NicolasTodoListComponent } from "./components/nicolas-todo-list/nicolas-todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AleTodoListComponent, NicolasTodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
