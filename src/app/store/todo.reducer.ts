import {createReducer, on} from '@ngrx/store';
import {todoCreate, todoDelete} from './todo.actions';
import {Todo} from '../models/todo.model';

const initialState: Todo[] = [{
    id: 0,
    name: 'faire les courses',
    isDone: false
}, {
    id: 1,
    name: 'sortir les poubelles',
    isDone: false
}, {
    id: 2,
    name: 'promener le chien',
    isDone: false
},];

export const todoReducer = createReducer(
    initialState,
    on(todoCreate, (state: Todo[], {name}) => {
        const newId = state.length > 0 ? Math.max(...state.map(t => t.id)) + 1 : 0;
        const newTask: Todo = {
            id: newId,
            name: name,
            isDone: false
        };
        return [...state, newTask];
    }),
    on(todoDelete, (state: Todo[], {taskId}) => {
        return state.filter((task: Todo) => task.id !== taskId);
    })
)
