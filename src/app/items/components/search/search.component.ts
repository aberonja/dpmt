import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() phrase: string;

  constructor() {}

  ngOnInit() {}

  onSearch(e) {
    console.log(e.detail.value);
  }
}
