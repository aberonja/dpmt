import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenuesComponent } from './container/venues.component';

const routes: Routes = [
  {
    path: 'venues',
    component: VenuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule {}
