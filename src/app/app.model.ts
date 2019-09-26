import { RouterReducerState } from '@ngrx/router-store';
import { ISidePanelState } from './shared/components/side-panel/state/side-panel.model';

export interface AppState {
  router: RouterReducerState;
  sidePanel: ISidePanelState;
}
