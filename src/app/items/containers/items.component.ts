import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenModal } from '@uefa-dptm/modal/state/modal.actions';
import { IModalState } from '@uefa-dptm/modal/state/modal.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  constructor(private _store: Store<{ modal: IModalState }>) {}

  openDialog() {
    this._store.dispatch(
      OpenModal({ payload: { type: 'confirmationModal', id: 1 } })
    );
  }
}
