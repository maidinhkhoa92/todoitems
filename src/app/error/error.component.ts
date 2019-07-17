import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input('errors') errors: object;
  @Input('name') name: string;
  @Input('touched') touched: boolean;

  constructor() { }

  ngOnInit() {
  }

}
