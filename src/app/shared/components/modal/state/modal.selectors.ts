import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IModalState } from './modal.model';

const getState = (state: IModalState) => state;

const getModal = createFeatureSelector<IModalState>('modal');
export const getStateSelector = createSelector(
  getModal,
  getState
);
