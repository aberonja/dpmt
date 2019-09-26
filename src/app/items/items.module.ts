import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { PaginationComponent } from './../shared/components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
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
  declarations: [ItemsComponent, SearchComponent, TableComponent, PaginationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsModule {}
