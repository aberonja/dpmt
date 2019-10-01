import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import { ISidePanelState } from '@uefa-dptm/shared/components/side-panel/state/side-panel.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  isFetching: boolean = false;
  items = [
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
  ];

  constructor(private _store: Store<{ sidePanel: ISidePanelState }>) {}

  openSidePanel(id: number) {
    this._store.dispatch(
      OpenSidePanel({ payload: { type: 'itemEdit', heading: 'Edit item', id } })
    );
  }
}
