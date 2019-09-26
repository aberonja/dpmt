import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromModal from '@uefa-dptm/shared/components/modal/state/modal.reducer';
import * as fromSidePanel from '@uefa-dptm/shared/components/side-panel/state/side-panel.reducer';
import { AppState } from './app.model';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  sidePanel: fromSidePanel.sidePanelReducer,
  modal: fromModal.modalReducer,
};
