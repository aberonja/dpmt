import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '@uefa-dptm/shared/shared.module';
import { ClubsModule } from './administration/clubs/clubs.module';
import { UsersModule } from './administration/users/users.module';
import { VenuesModule } from './administration/venues/venues.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './core/common.service';
import { ItemsModule } from './items/items.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsModule } from './projects/projects.module';
import { TopHeaderComponent } from './shared/components/top-header/top-header.component';
import { TemplatesModule } from './templates/templates.module';

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
    SharedModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
