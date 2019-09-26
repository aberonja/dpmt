import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@uefa-dptm/shared/state/router.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  routeUrl$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.routeUrl$ = this.store.select(fromRoot.selectUrl);
  }
}
