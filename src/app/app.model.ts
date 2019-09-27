import { RouterReducerState } from '@ngrx/router-store';
import { IModalState } from './shared/components/modal/state/modal.model';

export interface AppState {
  router: RouterReducerState;
  modal: IModalState;
}
