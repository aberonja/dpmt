import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { TemplatesComponent } from './templates.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'templates',
        component: TemplatesComponent
      }
    ])
  ],
  declarations: [TemplatesComponent]
})
export class TemplatesModule {}
