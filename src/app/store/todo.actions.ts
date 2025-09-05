import {createAction, props} from '@ngrx/store';

export const todoCreate = createAction('[Todo Component] Create');
export const todoDelete = createAction(
    '[Todo Component] Delete',
    props<{taskId : number}>()
);
