import { createAction, props } from '@ngrx/store';

export const setZipCode = createAction(
  '[App] Set Zip Code',
  props<{ zipCode: string }>()
);

export const clearZipCode = createAction(
  '[App] Clear Zip Code'
);
