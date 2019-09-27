import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { AuditLogsModule } from './administration/audit-logs/audit-logs.module';
import { CategoriesModule } from './administration/categories/categories.module';
import { ClubsModule } from './administration/clubs/clubs.module';
import { MaterialsModule } from './administration/materials/materials.module';
import { UsersModule } from './administration/users/users.module';
import { VenuesModule } from './administration/venues/venues.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { CommonService } from './core/common.service';
import { ItemsModule } from './items/items.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsModule } from './projects/projects.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';
import { TopHeaderComponent } from './shared/components/top-header/top-header.component';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TopHeaderComponent,
    SidePanelComponent,
    ModalComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    HttpModule,
    UsersModule,
    VenuesModule,
    ClubsModule,
    ItemsModule,
    TemplatesModule,
    ProjectsModule,
    MaterialsModule,
    CategoriesModule,
    AuditLogsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
