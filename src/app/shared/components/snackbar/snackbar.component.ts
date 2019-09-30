import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ISnackBarState } from './state/snackbar.model';
import {
  getIdSelector,
  getSnackBarStateSelector,
} from './state/snackbar.selectors';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  @ViewChild('snackBar', { static: false }) snackBar: ElementRef<
    HTMLDsSnackBarElement
  >;
  snackBar$: Subscription;

  constructor(private _store: Store<{ snackbar: ISnackBarState }>) {}

  ngOnInit() {
    this.snackBar$ = this._store
      .select(getIdSelector)
      .pipe(
        mergeMap(() =>
          this._store.select(getSnackBarStateSelector).pipe(take(1))
        )
      )
      .subscribe(snackBarData => {
        if (snackBarData.id) {
          this.snackBar.nativeElement[snackBarData.type](snackBarData.message, {
            timeout: 2000,
          });
        }
      });
  }

  ngOnDestroy() {
    this.snackBar$.unsubscribe();
  }
}
