import { createAction, props } from '@ngrx/store';
import { ISidePanel } from './side-panel.model';

const OPEN_SIDE_PANEL = '[UI] Open Side Panel';
const CLOSE_SIDE_PANEL = '[UI] Close Side Panel';

export const OpenSidePanel = createAction(
  OPEN_SIDE_PANEL,
  props<{ payload: ISidePanel }>()
);
export const CloseSidePanel = createAction(CLOSE_SIDE_PANEL);
