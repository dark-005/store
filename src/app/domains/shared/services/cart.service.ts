import { Injectable , signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    
  })

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state,product]);
  }
}
