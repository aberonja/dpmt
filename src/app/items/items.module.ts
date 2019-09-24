import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsComponent]
})
export class ItemsModule { }
