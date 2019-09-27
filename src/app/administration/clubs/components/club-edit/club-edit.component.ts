import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-edit',
  templateUrl: './club-edit.component.html',
  styleUrls: ['./club-edit.component.scss'],
})
export class ClubEditComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
