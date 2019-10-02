import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CloseModal } from './state/modal.actions';
import { IModalState } from './state/modal.model';
import { getStateSelector } from './state/modal.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  dialogSub$: Subscription;
  state: IModalState;

  constructor(private _store: Store<{ modal: IModalState }>) {}

  ngOnInit() {
    this.dialogSub$ = this._store.select(getStateSelector).subscribe(state => {
      this.state = state;
    });
  }

  ngOnDestroy() {
    this.dialogSub$.unsubscribe();
  }

  onDialogCancel() {
    this._store.dispatch(CloseModal());
  }

  primaryAction() {
    console.log('primary action dispatch goes here');
  }
}
