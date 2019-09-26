import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { ClubsModule } from './administration/clubs/clubs.module';
import { UsersModule } from './administration/users/users.module';
import { VenuesModule } from './administration/venues/venues.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { CommonService } from './core/common.service';
import { ItemsModule } from './items/items.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsModule } from './projects/projects.module';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';
import { TopHeaderComponent } from './shared/components/top-header/top-header.component';
import { TemplatesModule } from './templates/templates.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TopHeaderComponent,
    SidePanelComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    VenuesModule,
    ClubsModule,
    ItemsModule,
    TemplatesModule,
    ProjectsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
