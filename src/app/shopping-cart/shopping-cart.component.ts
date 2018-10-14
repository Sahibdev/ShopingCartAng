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

  ngOnInit() {
    this.products = this._productservice.getCartProduct();
  }

  remove(i){
    this._productservice.removefromcart(i);
  }
}
