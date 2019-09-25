import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { ItemsComponent } from './containers/items.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'items',
        component: ItemsComponent
      }
    ])
  ],
  declarations: [ItemsComponent, SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsModule {}
