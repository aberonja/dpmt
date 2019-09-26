import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CloseModal } from './state/modal.actions';
import { IModalState } from './state/modal.model';
import { getIsOpenSelector } from './state/modal.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  dialogSub$: Subscription;
  isOpen: boolean = false;

  constructor(private _store: Store<{ modal: IModalState }>) {}

  ngOnInit() {
    this.dialogSub$ = this._store
      .select(getIsOpenSelector)
      .subscribe(isOpen => {
        this.isOpen = isOpen;
      });
  }

  ngOnDestroy() {
    this.dialogSub$.unsubscribe();
  }

  openDialog() {
    this.isOpen = true;
  }

  onDialogCancel() {
    this._store.dispatch(CloseModal());
  }
}
