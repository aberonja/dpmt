import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { VenuesComponent } from './container/venues.component';
import { VenuesRoutingModule } from './venues-routing.module';

@NgModule({
  imports: [
    SharedModule,
    VenuesRoutingModule,
    StoreModule.forFeature('venues', {})
  ],
  declarations: [VenuesComponent]
})
export class VenuesModule {}
