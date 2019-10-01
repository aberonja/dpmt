import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../shared/components/top-header/top-header.model';
import { TableComponent } from './components/table/table.component';
import { ItemsComponent } from './containers/items.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'items',
        component: ItemsComponent,
        data: {
          heading: 'Add item',
          type: 'itemCreate',
        } as IRouteData,
      },
    ]),
  ],
  declarations: [ItemsComponent, TableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsModule {}
