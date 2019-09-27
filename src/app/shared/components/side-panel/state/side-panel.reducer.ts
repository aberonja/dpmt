import { createReducer, on } from '@ngrx/store';
import { CloseSidePanel, OpenSidePanel } from './side-panel.actions';
import { ISidePanelState } from './side-panel.model';

export const sidePanelFeatureKey = 'sidePanel';

const initialState: ISidePanelState = {
  isOpen: false,
  type: null,
  id: null,
};

export const sidePanelReducer = createReducer(
  initialState,
  on(OpenSidePanel, (state, { payload: { type, id } }) => ({
    ...state,
    isOpen: true,
    type,
    id,
  })),
  on(CloseSidePanel, () => initialState)
);
