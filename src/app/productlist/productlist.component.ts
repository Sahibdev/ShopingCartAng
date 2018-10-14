import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public products = [];
  constructor(private _productservice:ProductServiceService ) { }

  //Get all products
  ngOnInit() {
    this.products = this._productservice.getProduct();
  }
 
  //handles button click to add product in cart
  sendtocart(i){
    this._productservice.addtocart(i);
  }
}
