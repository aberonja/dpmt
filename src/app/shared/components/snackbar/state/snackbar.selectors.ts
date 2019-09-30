import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISnackBarState } from './snackbar.model';

const getId = (state: ISnackBarState) => state.id;
const getState = (state: ISnackBarState) => state;

const getSnackBar = createFeatureSelector<ISnackBarState>('snackbar');
export const getIdSelector = createSelector(
  getSnackBar,
  getId
);

export const getSnackBarStateSelector = createSelector(
  getSnackBar,
  getState
);
