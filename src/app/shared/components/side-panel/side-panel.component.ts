import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CloseSidePanel } from './state/side-panel.actions';
import { ISidePanelState } from './state/side-panel.model';
import { getStateSelector } from './state/side-panel.selectors';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit, OnDestroy {
  isOpen$: Subscription;
  sidePanelType: string;
  id: number;
  heading: string;

  @ViewChild('sidepanel', { static: false }) sidePanel: ElementRef<
    HTMLDsSidePanelElement
  >;

  constructor(private _store: Store<{ ui: ISidePanelState }>) {}

  ngOnInit() {
    this.isOpen$ = this._store.select(getStateSelector).subscribe(state => {
      if (state.isOpen) {
        this.sidePanel.nativeElement.open();
        this.sidePanelType = state.type;
        this.id = state.id;
        this.heading = state.heading;
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
