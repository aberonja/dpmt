import { RouterReducerState } from '@ngrx/router-store';
import { IModalState } from './modal/state/modal.model';
import { ISidePanelState } from './shared/components/side-panel/state/side-panel.model';

export interface AppState {
  router: RouterReducerState;
  sidePanel: ISidePanelState;
  modal: IModalState;
}
