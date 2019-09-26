import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CloseSidePanel } from './state/side-panel.actions';
import { ISidePanelState } from './state/side-panel.model';
import { getIsOpenSelector } from './state/side-panel.selectors';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit, OnDestroy {
  isOpen$: Subscription;

  @ViewChild('sidepanel', { static: false }) sidePanel: ElementRef<
    HTMLDsSidePanelElement
  >;

  constructor(private _store: Store<{ ui: ISidePanelState }>) {}

  ngOnInit() {
    this.isOpen$ = this._store.select(getIsOpenSelector).subscribe(isOpen => {
      if (isOpen) {
        this.sidePanel.nativeElement.open();
      }
    });
  }

  ngOnDestroy() {
    this.isOpen$.unsubscribe();
  }

  onSidePanelClose() {
    this._store.dispatch(CloseSidePanel());
  }
}
