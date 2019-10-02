import { createReducer, on } from '@ngrx/store';
import { CloseModal, OpenModal } from './modal.actions';
import { IModalState } from './modal.model';

const initialState: IModalState = {
  isOpen: false,
  type: null,
  id: null,
  heading: null,
  text: null,
  primaryAction: null,
};

export const modalReducer = createReducer(
  initialState,
  on(
    OpenModal,
    (state, { payload: { type, id, heading, text, primaryAction } }) => ({
      ...state,
      isOpen: true,
      type,
      id,
      heading,
      text,
      primaryAction,
    })
  ),
  on(CloseModal, state => ({ ...state, isOpen: false }))
);
