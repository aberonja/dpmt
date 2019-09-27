import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersComponent } from './container/users.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UsersComponent,
      },
    ]),
    StoreModule.forFeature('users', {}),
  ],
  declarations: [UsersComponent, UsersTableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
