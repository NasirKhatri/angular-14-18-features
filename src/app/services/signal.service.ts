import { computed, Injectable, signal } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  qty = signal(0)
  cartItems = signal<CartItem[]>([]);

  addToCart(vehicle: Vehicle) {
    this.cartItems.update(items => [...items, { vehicle, qty: 1}])
  }

  deleteItemCart(cartItem: CartItem) {
    this.cartItems.update(items => items.filter(item => item.vehicle.product != cartItem.vehicle.product))
  }

  updateQty(cartItem: CartItem, qty: number) {
    this.cartItems.update(items => items.map(item => item.vehicle.product === cartItem.vehicle.product ? { vehicle: cartItem.vehicle, qty: qty} : item) )
  }

  cartTotalQty() {
    return computed(() => {
      return this.cartItems().reduce((acc, item) => {
        return acc += item.qty
      }, 0)
    })
  }

}

export interface Vehicle {
  product: string,
  class: string,
  price: number
}

export interface CartItem {
  vehicle: Vehicle,
  qty: number
}