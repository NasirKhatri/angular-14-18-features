import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem, SignalService, Vehicle } from 'src/app/services/signal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class CartComponent {
  constructor(private _ss: SignalService) {}
  vehicleList: Vehicle[] = [
    {
      product: "Mehran",
      price: 1000000,
      class: "hatchback"
    },
    {
      product: "Cultus",
      price: 3500000,
      class: "hatchback"
    },
    {
      product: "Corolla",
      price: 4000000,
      class: "sedan"
    },
    {
      product: "Prado",
      price: 70000000,
      class: "luxury"
    },
    {
      product: "Civic",
      price: 6000000,
      class: "sedan"
    },
  ];

  cart = this._ss.cartItems;
  qty = this._ss.cartTotalQty();

  addToCart(vehicle: Vehicle) {
    this._ss.addToCart(vehicle)
  }

  deleteItem(cartItem: CartItem) {
    this._ss.deleteItemCart(cartItem)
  }

  updateQty(event: Event, item: CartItem) {
    const inputElement = event.target as HTMLInputElement;
    const qty = parseInt(inputElement.value, 10);
  
    // Perform any additional validation if necessary
    if (!isNaN(qty)) {
      this._ss.updateQty(item, qty);
    }
  }
}