import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IModalState } from './modal.model';

const getIsOpen = (state: IModalState) => state.isOpen;
const getState = (state: IModalState) => state;

const getModal = createFeatureSelector<IModalState>('modal');
export const getIsOpenSelector = createSelector(
  getModal,
  getIsOpen
);
export const getStateSelector = createSelector(
  getModal,
  getState
);
