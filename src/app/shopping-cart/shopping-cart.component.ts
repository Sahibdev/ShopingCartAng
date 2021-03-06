import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products = [];
  constructor(private _productservice:ProductServiceService ) { }

  //get all the products in cart from service
  ngOnInit() {
    this.products = this._productservice.getCartProduct();
  }

  //on button click remove the product
  remove(i){
    this._productservice.removefromcart(i);
  }
}
