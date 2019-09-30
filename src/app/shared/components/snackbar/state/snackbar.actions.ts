import { createAction, props } from '@ngrx/store';
import { ISnackBar } from './snackbar.model';

const OPEN_SNACKBAR = '[UI_SNACKBAR] Open SnackBar';
const CLOSE_SNACKBAR = '[UI_SNACKBAR] Close SnackBar';

export const OpenSnackBar = createAction(
  OPEN_SNACKBAR,
  props<{ payload: ISnackBar }>()
);
export const CloseSnackBar = createAction(CLOSE_SNACKBAR);
