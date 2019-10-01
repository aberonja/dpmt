import { createReducer, on } from '@ngrx/store';
import { CloseSidePanel, OpenSidePanel } from './side-panel.actions';
import { ISidePanelState } from './side-panel.model';

export const sidePanelFeatureKey = 'sidePanel';

const initialState: ISidePanelState = {
  isOpen: false,
  type: null,
  heading: null,
  id: null,
};

export const sidePanelReducer = createReducer(
  initialState,
  on(OpenSidePanel, (state, { payload: { type, id, heading } }) => ({
    ...state,
    isOpen: true,
    type,
    heading,
    id,
  })),
  on(CloseSidePanel, () => initialState)
);
