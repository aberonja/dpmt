import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-edit',
  templateUrl: './venue-edit.component.html',
  styleUrls: ['./venue-edit.component.scss'],
})
export class VenueEditComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
