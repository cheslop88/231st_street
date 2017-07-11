import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  item = Item;
  showHide: boolean;

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  constructor(private itemService: ItemService) { this.showHide = true; }

  ngOnInit() {

    this.itemService.getItems()
    .subscribe(itemsData => this.items = itemsData);
  }
  totalCost() {
    let sum = 0;
    if (this.items) {
      if (Array.isArray(this.items)) {
        for (const item of this.items) {
          if (item.inBasket) {
            if (item.special_offer) {
              sum += item.quantity * item.special_offer_price;
            } else {
              sum += item.quantity * item.price;
            }
          }
        }
      }
    }
    return sum;
  }

  buyItem(item) {
      item.inBasket = true;
    }


  cancelItem(item) {
    item.inBasket = false;
  }

  upQuantity(item) {
    if (item.quantity < item.stock_available) item.quantity++;
    if (item.quantity > 0) item.inBasket = true;
  }

  downQuantity(item) {
    if (item.quantity != 0) item.quantity--;
    if (item.quantity === 0) item.inBasket = false;
  }

}
