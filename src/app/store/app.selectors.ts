import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectZipCode = createSelector(
  selectAppState,
  (state: AppState) => state.zipCode
);
