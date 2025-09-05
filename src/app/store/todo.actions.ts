import {createAction, props} from '@ngrx/store';

export const todoCreate = createAction('[Todo Component] Create', props<{name: string}>());
export const todoDelete = createAction(
    '[Todo Component] Delete',
    props<{taskId : number}>()
);
