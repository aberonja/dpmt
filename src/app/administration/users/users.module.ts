import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { UsersComponent } from './container/users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', {})
  ],
  declarations: [UsersComponent]
})
export class UsersModule {}
