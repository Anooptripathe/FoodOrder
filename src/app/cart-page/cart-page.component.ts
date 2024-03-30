import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  
  cart!:Cart

  constructor(private cartService:CartService)
  {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  setCart()
  {
    this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem)
  {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();//instance load data
  }
  changeQuantity(cartItem:CartItem,quantityInString:string)
  {
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
