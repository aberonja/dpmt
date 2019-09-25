import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { ItemsComponent } from './containers/items.component';
import { SearchComponent } from './components/search/search.component';

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
