import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { ClubsComponent } from './container/clubs.component';
import * as fromClubs from './state/clubs.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'clubs',
        component: ClubsComponent
      }
    ]),
    StoreModule.forFeature(
      fromClubs.clubsFeatureKey,
      /* Reducer goes here instead of empty object */ {}
    )
  ],
  declarations: [ClubsComponent]
})
export class ClubsModule {}
