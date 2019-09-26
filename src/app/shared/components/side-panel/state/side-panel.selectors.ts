import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISidePanelState } from './side-panel.model';

const getIsOpen = (state: ISidePanelState) => state.isOpen;

const getSidePanel = createFeatureSelector<ISidePanelState>('sidePanel');
export const getIsOpenSelector = createSelector(
  getSidePanel,
  getIsOpen
);
