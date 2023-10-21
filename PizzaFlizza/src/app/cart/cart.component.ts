import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { dishesInterface } from '../dishesInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: dishesInterface[] = [];
  total: number = 0;
  service: number = 0;
  totalAll: number = 0;
  disc: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calcTotal();
    this.service = this.cartService.calcServ();
    this.disc = this.cartService.calcDisc();
    this.totalAll = this.cartService.calcTotalAll();
  }

  removeFromCart(item: dishesInterface) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.cartService.saveToLocalStorage();
      this.total = this.cartService.calcTotal();
      this.service = this.cartService.calcServ();
      this.disc = this.cartService.calcDisc();
      this.totalAll = this.cartService.calcTotalAll();
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartService.saveToLocalStorage();
    this.ngOnInit();
  }
}
