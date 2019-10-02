import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setIcon',
})
export class SetIconPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'submitted':
        return 'action-edit';
      case 'approved':
        return 'content-check';
      default:
        return 'content-check';
    }
  }
}
