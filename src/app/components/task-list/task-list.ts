import {Component, inject} from '@angular/core';
import {createReducer, Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {todoCreate, todoDelete} from '../../store/todo.actions';

@Component({
    selector: 'app-task-list',
    imports: [
        AsyncPipe
    ],
    templateUrl: './task-list.html',
    standalone: true,
    styleUrl: './task-list.css'
})
export class TaskList {
    readonly store$ = inject(Store<{todo: any}>);
    readonly taskName: string = '';

    constructor() {
        this.store$.subscribe((data) => {
            console.log(data)
        })
    }

    handleDeleteTask(taskId: number) {
        this.store$.dispatch(todoDelete({taskId: taskId}))
    }
    handleAddTask() {
      this.store$.dispatch(todoCreate({this.taskName}))
    }
}
