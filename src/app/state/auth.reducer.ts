import { createAction, createReducer, on } from '@ngrx/store';

export const authReducer = createReducer(
    { isAuthenticated: false },
    on(createAction('isAuthenticated changed'), state => {
        return {
            ...state,
            isAuthenticated: !state.isAuthenticated
        };
    })
);