import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '@uefa-dptm/items/components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { SetIconPipe } from './pipes/setIcon/set-icon.pipe';
import { UrlFormatterPipe } from './pipes/url-formatter/url-formatter.pipe';

@NgModule({
  declarations: [
    UrlFormatterPipe,
    CapitalizePipe,
    SearchComponent,
    PaginationComponent,
    SnackbarComponent,
    SetIconPipe,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UrlFormatterPipe,
    CapitalizePipe,
    SearchComponent,
    PaginationComponent,
    SnackbarComponent,
    SetIconPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
