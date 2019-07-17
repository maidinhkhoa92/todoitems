import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input('list') list: array;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  updateItem = (item, index) => {
    const event = { item, index };
    this.update.emit(event);
  }
  removeItem = (index) => {
    this.remove.emit(index);
  }
}
