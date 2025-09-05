import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskList} from './components/task-list/task-list';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TaskList],
    templateUrl: './app.html',
    standalone: true,
    styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp3-ngrx');
}
