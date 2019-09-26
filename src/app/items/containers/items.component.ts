import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import { ISidePanelState } from './../../shared/components/side-panel/state/side-panel.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  constructor(private _store: Store<{ sidePanel: ISidePanelState }>) {}

  openSidePanel() {
    this._store.dispatch(OpenSidePanel({ payload: { type: 'item' } }));
  }
}
