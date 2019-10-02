import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { IRouteData } from '@uefa-dptm/shared/components/top-header/top-header.model';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { VenuesTableComponent } from './components/venues-table/venues-table.component';
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
  declarations: [VenuesComponent, VenuesTableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VenuesModule {}
