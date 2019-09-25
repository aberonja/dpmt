import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormatter'
})
export class UrlFormatterPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    if (value) {
      return value.replace('/', '').replace('-', ' ');
    }
  }
}
