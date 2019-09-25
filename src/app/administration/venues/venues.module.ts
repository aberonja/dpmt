import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { VenuesComponent } from './container/venues.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'venues',
        component: VenuesComponent
      }
    ]),
    StoreModule.forFeature('venues', {})
  ],
  declarations: [VenuesComponent]
})
export class VenuesModule {}
