import { TemplatesRoutingModule } from './templates-routing.module';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';

@NgModule({
  imports: [SharedModule, TemplatesRoutingModule],
  declarations: [TemplatesComponent]
})
export class TemplatesModule {}
