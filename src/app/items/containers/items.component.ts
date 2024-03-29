import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenModal } from '@uefa-dptm/shared/components/modal/state/modal.actions';
import { IModalState } from '@uefa-dptm/shared/components/modal/state/modal.model';
import { OpenSnackBar } from '@uefa-dptm/shared/components/snackbar/state/snackbar.actions';
import * as uuid from 'uuid';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  constructor(private _store: Store<{ modal: IModalState }>) {}

  openDialog() {
    this._store.dispatch(
      OpenModal({
        payload: {
          type: 'default',
          id: 1,
          heading: 'heading',
          text: 'text',
          primaryAction: 'action',
        },
      })
    );

    this._store.dispatch(
      OpenSnackBar({
        payload: { message: 'Example message', type: 'success', id: uuid.v4() },
      })
    );
  }
}
