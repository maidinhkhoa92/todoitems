import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() editAble: boolean;
  @Input() index: number;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(this.editAble){
      const event = {
        index: this.index,
        item: form
      }
      this.update.emit(event);
    } else {
      this.add.emit(form);
    }

  }
}
