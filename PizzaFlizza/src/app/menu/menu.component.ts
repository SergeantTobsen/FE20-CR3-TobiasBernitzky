import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { dishesInterface } from '../dishesInterface';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: dishesInterface[] = dishes;
  dish: dishesInterface = {} as dishesInterface;

  constructor(private cartService: CartService) {}

  addToCartwithIndex(index: number) {
    Swal.fire({
      title: `${this.dishes[index].name}`,
      text: 'has been added to your order.',
      imageUrl: `${this.dishes[index].image}`,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
    const item = this.dishes[index];
    this.cartService.addToCart(item);
  }

  ngOnInit(): void {}
}
