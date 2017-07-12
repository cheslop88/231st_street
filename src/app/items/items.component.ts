import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'cocktail-menu',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.itemService.getItems()
    .subscribe(itemsData => this.items = itemsData);
  }
  /* Function to show total cost of ordered items */
  totalCost() {
    let sum = 0;
    if (this.items) {
      if (Array.isArray(this.items)) {
        for (const item of this.items) {
          if (item.inBasket) {
              sum += item.quantity * item.price;
          }
        }
      }
    }
    return sum;
  }
  /* Function to show total quantity of ordered items */
  totalQuantity() {
    let sum = 0;
    if (this.items) {
      if (Array.isArray(this.items)) {
        for (const item of this.items) {
          if (item.inBasket) {
              sum += item.quantity;
          }
        }
      }
    }
    return sum;
  }
  /* Function to increase quantity on click */
  upQuantity(item) {
    if (item.quantity < item.stock_available) item.quantity++;
    if (item.quantity > 0) item.inBasket = true;
  }
  /* Function to increase quantity on click */
  downQuantity(item) {
    if (item.quantity != 0) item.quantity--;
    if (item.quantity === 0) item.inBasket = false;
  }

}
