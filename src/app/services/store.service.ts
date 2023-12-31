import { Injectable } from '@angular/core';
import { Product } from "../models/product.models"


import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private  myShoppingCart: Product[] = []

  private myCart = new BehaviorSubject<Product[]>([])

  myCart$ = this.myCart.asObservable()

  addProduct(product: Product) {
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }

}
