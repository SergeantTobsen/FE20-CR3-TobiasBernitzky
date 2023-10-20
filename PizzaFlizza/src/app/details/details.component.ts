import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { dishesInterface } from '../dishesInterface';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  dish: dishesInterface = {} as dishesInterface;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart() {
    this.cartService.addToCart(this.dish);
    Swal.fire({
      title: `${this.dish.name}`,
      text: 'has been added to your order.',
      imageUrl: `${this.dish.image}`,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishId'];
      this.dish = dishes[this.id];
    });
  }
}
