import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { ItemsComponent } from './containers/items.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'items',
        component: ItemsComponent,
      },
    ]),
  ],
  declarations: [ItemsComponent, TableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ItemsModule {}
