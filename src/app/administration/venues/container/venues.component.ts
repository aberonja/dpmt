import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import { ISidePanelState } from '@uefa-dptm/shared/components/side-panel/state/side-panel.model';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
})
export class VenuesComponent implements OnInit {
  constructor(private _store: Store<{ sidePanel: ISidePanelState }>) {}

  ngOnInit() {}

  openFilters() {
    this._store.dispatch(
      OpenSidePanel({
        payload: { type: 'venueFilters', heading: 'Filter' },
      })
    );
  }
}
