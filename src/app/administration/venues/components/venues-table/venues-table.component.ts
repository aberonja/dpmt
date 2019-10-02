import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenModal } from '@uefa-dptm/shared/components/modal/state/modal.actions';
import { IModalState } from '@uefa-dptm/shared/components/modal/state/modal.model';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import { ISidePanelState } from '@uefa-dptm/shared/components/side-panel/state/side-panel.model';

@Component({
  selector: 'app-venues-table',
  templateUrl: './venues-table.component.html',
  styleUrls: ['./venues-table.component.scss'],
})
export class VenuesTableComponent {
  isFetching: boolean = false;
  items = [
    {
      id: 62085,
    },
    {
      id: 345012,
    },
  ];

  constructor(
    private _store: Store<{ sidePanel: ISidePanelState; modal: IModalState }>
  ) {}

  openSidePanel(id: number) {
    this._store.dispatch(
      OpenSidePanel({
        payload: { type: 'venueEdit', heading: 'Edit venue', id },
      })
    );
  }

  openDialog(event: MouseEvent) {
    event.stopPropagation();
    this._store.dispatch(
      OpenModal({
        payload: {
          type: 'danger',
          id: 1,
          heading: 'Delete venue',
          text:
            'Do you really want to delete this venue? This action can’t be undone.',
          primaryAction: 'Delete venue',
        },
      })
    );
  }
}
