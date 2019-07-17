import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  uri = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  get() {
    this.http.get(`${this.uri}/items`)
        .subscribe(res => console.log('Done'));
  }

  add(Title, Description, Price) {
    const obj = {
      Title,
      Description,
      Price
    };
    this.http.post(`${this.uri}/items`, obj)
        .subscribe(res => console.log('Done'));
  }

  update(Id, Title, Description, Price) {
    const obj = {
      Title,
      Description,
      Price
    };
    this.http.post(`${this.uri}/items/${Id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  delete(Id, Index) {
    this.http.delete(`${this.uri}/items/${Id}`, obj)
        .subscribe(res => console.log('Done'));
  }
}
