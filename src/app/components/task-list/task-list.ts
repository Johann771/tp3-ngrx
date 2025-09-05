import {Component, inject} from '@angular/core';
import {createReducer, Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';
import {todoDelete} from '../../store/todo.actions';

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

    constructor() {
        this.store$.subscribe((data) => {
            console.log(data)
        })
    }

    handleDeleteTask(taskId: number) {
        this.store$.dispatch(todoDelete({taskId: taskId}))
    }
}
