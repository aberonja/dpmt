import { ProjectsModule } from './projects/projects.module';
import { TemplatesModule } from './templates/templates.module';
import { ItemsModule } from './items/items.module';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ClubsModule } from './administration/clubs/clubs.module';
import { UsersModule } from './administration/users/users.module';
import { VenuesModule } from './administration/venues/venues.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './core/common.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, TopHeaderComponent],
  imports: [
    BrowserModule,
    UsersModule,
    VenuesModule,
    ClubsModule,
    ItemsModule,
    TemplatesModule,
    ProjectsModule,
    AppRoutingModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
