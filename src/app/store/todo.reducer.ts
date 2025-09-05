import {createReducer, on} from '@ngrx/store';
import {todoCreate, todoDelete} from './todo.actions';

const initialState: any = [{
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
    on(todoCreate, (state: any) => {
        return [...state, 'hello world'];
    }),
    on(todoDelete, (state: any, {taskId}) => {
        return state.filter((task: any) => task.id !== taskId);
    })
)
