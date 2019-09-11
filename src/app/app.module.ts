import { NgModule } from '@angular/core';
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
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    UsersModule,
    VenuesModule,
    ClubsModule,
    AppRoutingModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
