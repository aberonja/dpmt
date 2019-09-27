import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromModal from '@uefa-dptm/shared/components/modal/state/modal.reducer';
import { AppState } from './app.model';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  modal: fromModal.modalReducer,
};
