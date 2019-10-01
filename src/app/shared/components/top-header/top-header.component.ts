import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenSidePanel } from '@uefa-dptm/shared/components/side-panel/state/side-panel.actions';
import * as fromRoot from '@uefa-dptm/shared/state/router.selectors';
import { Observable, Subscription } from 'rxjs';
import { initialValues, IRouteData } from './top-header.model';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  routeUrl$: Observable<string>;
  routeData$: Subscription;
  highlightAction: IRouteData = initialValues;

  constructor(private _store: Store<any>) {}

  ngOnInit() {
    this.routeUrl$ = this._store.select(fromRoot.selectUrl);
    this.routeData$ = this._store
      .select(fromRoot.selectRouteData)
      .subscribe(routerData => {
        if (routerData && Object.keys(routerData).length) {
          this.highlightAction = routerData as IRouteData;
        } else {
          this.highlightAction = initialValues;
        }
      });
  }

  ngOnDestroy() {
    this.routeData$.unsubscribe();
  }

  actionClick() {
    this._store.dispatch(
      OpenSidePanel({
        payload: {
          type: this.highlightAction.type,
          heading: this.highlightAction.heading,
        },
      })
    );
  }
}
