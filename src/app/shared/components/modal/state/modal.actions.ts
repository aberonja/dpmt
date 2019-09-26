import { createAction, props } from '@ngrx/store';
import { IModal } from './modal.model';

const OPEN_MODAL = '[UI_MODAL] Open Modal';
const CLOSE_MODAL = '[UI_MODAL] Close Modal';

export const OpenModal = createAction(OPEN_MODAL, props<{ payload: IModal }>());
export const CloseModal = createAction(CLOSE_MODAL);
