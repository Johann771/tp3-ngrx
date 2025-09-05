import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {todoCreate, todoDelete} from '../../store/todo.actions';
import {FormsModule} from '@angular/forms';
import {Todo} from '../../models/todo.model';

@Component({
    selector: 'app-task-list',
  imports: [
    AsyncPipe,
    FormsModule
  ],
    templateUrl: './task-list.html',
    standalone: true,
    styleUrl: './task-list.css'
})
export class TaskList {
    private readonly store = inject(Store);
    // On utilise un sélecteur pour récupérer les données de manière optimisée
    readonly todos$ = this.store.select(state => (state as {todo: Todo[]}).todo);
    taskName: string = '';

    constructor() {
        this.todos$.subscribe((data) => {
            console.log(data)
        })
    }

    handleDeleteTask(taskId: number) {
        this.store.dispatch(todoDelete({taskId: taskId}))
    }
    handleCreateTask() {
      if (this.taskName.trim()) { // On évite de créer des tâches vides
        this.store.dispatch(todoCreate({name: this.taskName}));
        this.taskName = ''; // On vide le champ après la création
      }
    }
}
