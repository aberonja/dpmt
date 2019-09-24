import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [SharedModule, ProjectsRoutingModule],
  declarations: [ProjectsComponent]
})
export class ProjectsModule {}
