import { createReducer, on } from '@ngrx/store';
import { CloseModal, OpenModal } from './modal.actions';
import { IModalState } from './modal.model';

const initialState: IModalState = {
  isOpen: false,
  type: null,
  id: null,
};

export const modalReducer = createReducer(
  initialState,
  on(OpenModal, (state, { payload: { type, id } }) => ({
    ...state,
    isOpen: true,
    type,
    id,
  })),
  on(CloseModal, () => initialState)
);
