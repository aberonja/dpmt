import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  constructor() {}

  previousPage() {
    console.log('previous');
  }

  nextPage() {
    console.log('next');
  }
}
