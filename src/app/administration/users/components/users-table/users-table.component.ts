import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import { ISidePanelState } from '@uefa-dptm/shared/components/side-panel/state/side-panel.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  isFetching: boolean = false;
  items = [
    {
      id: 21,
      checked: false,
    },
    {
      id: 31,
      checked: false,
    },
  ];

  constructor(private _store: Store<{ sidePanel: ISidePanelState }>) {}

  openSidePanel(id: number) {
    this._store.dispatch(
      OpenSidePanel({ payload: { type: 'userEdit', heading: 'Edit user', id } })
    );
  }
}
