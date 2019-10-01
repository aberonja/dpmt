import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../../shared/components/top-header/top-header.model';
import { VenuesComponent } from './container/venues.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'venues',
        component: VenuesComponent,
        data: {
          heading: 'Add venue',
          type: 'venueCreate',
        } as IRouteData,
      },
    ]),
    StoreModule.forFeature('venues', {}),
  ],
  declarations: [VenuesComponent],
})
export class VenuesModule {}
