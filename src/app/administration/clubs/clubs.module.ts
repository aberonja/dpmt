import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../../shared/components/top-header/top-header.model';
import { ClubsComponent } from './container/clubs.component';
import * as fromClubs from './state/clubs.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'clubs',
        component: ClubsComponent,
        data: {
          heading: 'Add club',
          type: 'clubCreate',
        } as IRouteData,
      },
    ]),
    StoreModule.forFeature(
      fromClubs.clubsFeatureKey,
      /* Reducer goes here instead of empty object */ {}
    ),
  ],
  declarations: [ClubsComponent],
})
export class ClubsModule {}
