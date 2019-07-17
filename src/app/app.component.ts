import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    {
      title: 'title 1',
      description: 'this is description 1',
      time: '10-10-2019 10:00:00'
    },
    {
      title: 'title 2',
      description: 'this is description 2',
      time: '10-10-2019 10:00:00'
    },
    {
      title: 'title 3',
      description: 'this is description 3',
      time: '10-10-2019 10:00:00'
    },
  ];

  editAble = false;
  index = 0;
  item = {};

  add = ($event: any) => {
    this.list.push({
      title: $event.controls.title.value,
      description: $event.controls.description.value,
      time: $event.controls.time.value
    })
  }

  update = (event) => {
    this.editAble = true;
    this.index = event.index;
    this.item = event.item;
  }
  updateItem = (event) => {
    this.list[event.index] = {
      title: event.item.controls.title.value,
      description: event.item.controls.description.value,
      time: event.item.controls.time.value
    };
  }

  remove = (index) => {
    this.list.splice(index, 1);
  }
}
