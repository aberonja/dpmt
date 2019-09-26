import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public isFetching: boolean = false;

  public items = [
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
  ];

  constructor() {}
}
