import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../shared/components/top-header/top-header.model';
import { TemplatesComponent } from './templates.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'templates',
        component: TemplatesComponent,
        data: {
          heading: 'Add template',
          type: 'templateCreate',
        } as IRouteData,
      },
    ]),
  ],
  declarations: [TemplatesComponent],
})
export class TemplatesModule {}
