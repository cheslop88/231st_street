import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from './item';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  getItems() {
    return this.http.get('assets/items.json')
          .map(response => <Item[]>response.json().itemsData);
  }
}
