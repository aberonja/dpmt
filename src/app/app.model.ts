import { RouterReducerState } from '@ngrx/router-store';
import { IModalState } from './shared/components/modal/state/modal.model';
import { ISnackBarState } from './shared/components/snackbar/state/snackbar.model';

export interface AppState {
  router: RouterReducerState;
  modal: IModalState;
  snackbar: ISnackBarState;
}
