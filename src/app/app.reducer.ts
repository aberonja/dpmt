import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromSidePanel from '@uefa-dptm/shared/components/side-panel/state/side-panel.reducer';
import { AppState } from './app.model';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  sidePanel: fromSidePanel.sidePanelReducer
};
