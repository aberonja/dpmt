import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { IRouteData } from './../shared/components/top-header/top-header.model';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          heading: 'Add project',
          type: 'projectCreate',
        } as IRouteData,
      },
    ]),
  ],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
