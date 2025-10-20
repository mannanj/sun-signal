import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as AppActions from './app.actions';

export const initialState: AppState = {
  zipCode: ''
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setZipCode, (state, { zipCode }) => ({
    ...state,
    zipCode
  })),
  on(AppActions.clearZipCode, (state) => ({
    ...state,
    zipCode: ''
  }))
);
