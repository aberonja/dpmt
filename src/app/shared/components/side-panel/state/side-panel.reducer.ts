import { createReducer, on } from '@ngrx/store';
import { CloseSidePanel, OpenSidePanel } from './side-panel.actions';
import { ISidePanelState } from './side-panel.model';

const initialState: ISidePanelState = {
  isOpen: false,
  type: undefined
};

export const sidePanelReducer = createReducer(
  initialState,
  on(OpenSidePanel, (state, { payload: { type, id } }) => ({
    ...state,
    isOpen: true,
    type,
    id
  })),
  on(CloseSidePanel, () => ({
    isOpen: false,
    type: undefined,
    id: undefined
  }))
);
