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
      checked: false
    },
    {
      id: 2,
      checked: false
    },
    {
      id: 3,
      checked: false
    },
    {
      id: 4,
      checked: false
    },
    {
      id: 5,
      checked: false
    },
    {
      id: 6,
      checked: false
    },
    {
      id: 3,
      checked: false
    },
    {
      id: 3,
      checked: false
    },
    {
      id: 3,
      checked: false
    },
    {
      id: 3,
      checked: false
    }
  ];

  constructor() {}
}
