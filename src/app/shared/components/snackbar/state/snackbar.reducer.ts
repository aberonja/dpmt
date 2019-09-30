import { createReducer, on } from '@ngrx/store';
import { CloseSnackBar, OpenSnackBar } from './snackbar.actions';
import { ISnackBarState } from './snackbar.model';

const initialState: ISnackBarState = {
  isOpen: false,
  type: null,
  message: null,
  id: null,
};

export const snackBarReducer = createReducer(
  initialState,
  on(OpenSnackBar, (state, { payload: { type, message, id } }) => ({
    ...state,
    isOpen: true,
    type,
    message,
    id,
  })),
  on(CloseSnackBar, () => initialState)
);
