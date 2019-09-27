import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISidePanelState } from './side-panel.model';
import { sidePanelFeatureKey } from './side-panel.reducer';

const getState = (state: ISidePanelState) => state;

const getSidePanel = createFeatureSelector<ISidePanelState>(
  sidePanelFeatureKey
);
export const getStateSelector = createSelector(
  getSidePanel,
  getState
);
