import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CategoryCreateComponent } from '@uefa-dptm/administration/categories/components/category-create/category-create.component';
import { CategoryEditComponent } from '@uefa-dptm/administration/categories/components/category-edit/category-edit.component';
import { ClubCreateComponent } from '@uefa-dptm/administration/clubs/components/club-create/club-create.component';
import { ClubEditComponent } from '@uefa-dptm/administration/clubs/components/club-edit/club-edit.component';
import { MaterialCreateComponent } from '@uefa-dptm/administration/materials/components/material-create/material-create.component';
import { MaterialEditComponent } from '@uefa-dptm/administration/materials/components/material-edit/material-edit.component';
import { UserEditComponent } from '@uefa-dptm/administration/users/components/user-edit/user-edit.component';
import { VenueCreateComponent } from '@uefa-dptm/administration/venues/components/venue-create/venue-create.component';
import { VenueEditComponent } from '@uefa-dptm/administration/venues/components/venue-edit/venue-edit.component';
import { ItemCreateComponent } from '@uefa-dptm/items/components/item-create/item-create.component';
import { ItemEditComponent } from '@uefa-dptm/items/components/item-edit/item-edit.component';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { SidePanelComponent } from './side-panel.component';
import * as fromSidePanel from './state/side-panel.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(
      fromSidePanel.sidePanelFeatureKey,
      fromSidePanel.sidePanelReducer
    ),
  ],
  declarations: [
    SidePanelComponent,
    UserEditComponent,
    ClubCreateComponent,
    ClubEditComponent,
    MaterialCreateComponent,
    MaterialEditComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    VenueCreateComponent,
    VenueEditComponent,
    ItemCreateComponent,
    ItemEditComponent,
  ],
  exports: [SidePanelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidePanelModule {}
