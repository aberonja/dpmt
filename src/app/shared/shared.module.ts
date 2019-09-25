import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { UrlFormatterPipe } from './pipes/url-formatter/url-formatter.pipe';

@NgModule({
  declarations: [UrlFormatterPipe, CapitalizePipe],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, UrlFormatterPipe, CapitalizePipe],
})
export class SharedModule {}
