import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../../shared/components/top-header/top-header.model';
import { MaterialsComponent } from './container/materials.component';
import * as fromMaterials from './state/materials.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'materials',
        component: MaterialsComponent,
        data: {
          heading: 'Add material',
          type: 'materialCreate',
        } as IRouteData,
      },
    ]),
    StoreModule.forFeature(
      fromMaterials.materialsFeatureKey,
      /* Reducer goes here instead of empty object */ {}
    ),
  ],
  declarations: [MaterialsComponent],
})
export class MaterialsModule {}
