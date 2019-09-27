import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { CategoriesComponent } from './container/categories.component';
import * as fromCategories from './state/categories.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'categories',
        component: CategoriesComponent,
      },
    ]),
    StoreModule.forFeature(
      fromCategories.categoriesFeatureKey,
      /* Reducer goes here instead of empty object */ {}
    ),
  ],
  declarations: [CategoriesComponent],
})
export class CategoriesModule {}
