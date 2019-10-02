import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  items = [
    {
      action: 'submitted',
      performer: 'Margaret Smith',
      date: '07/08/2019 12:31',
    },
    { action: 'approved', performer: 'Will Smith', date: '07/08/2019 12:36' },
    {
      action: 'submitted',
      performer: 'Jenny Clarke',
      date: '07/08/2019 15:51',
    },
  ];

  constructor() {}
}
