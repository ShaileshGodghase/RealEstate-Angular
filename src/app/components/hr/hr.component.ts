import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css'],
})
export class HrComponent implements OnInit {
  @Input() className: string = '';
  constructor() {}

  ngOnInit(): void {}
}
