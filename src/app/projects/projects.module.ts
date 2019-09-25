import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {}
