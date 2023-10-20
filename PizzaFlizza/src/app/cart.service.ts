import { Injectable } from '@angular/core';
import { dishesInterface } from './dishesInterface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: dishesInterface[] = [];

  constructor() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addToCart(dish: dishesInterface) {
    this.items.push(dish);
    this.saveToLocalStorage();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.saveToLocalStorage();

    return this.items;
  }

  saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  calcTotal(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  calcServ(): number {
    let service = 0;
    const total = this.calcTotal();
    service = total * 0.1;

    return Number(service.toFixed(2));
  }

  calcDisc() {
    let total = this.calcTotal() + this.calcServ();
    if (total >= 40) {
      total = 0 - total * 0.15;
    } else total = 0;

    return Number(total.toFixed(2));
  }

  calcTotalAll() {
    let total = this.calcTotal() + this.calcServ();
    if (total >= 40) {
      total = total - total * 0.15;
    }
    return Number(total.toFixed(2));
  }
}
