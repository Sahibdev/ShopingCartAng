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

  ngOnInit() {
    this.products = this._productservice.getProduct();
  }
 
  sendtocart(i){
    this._productservice.addtocart(i);
  }
}
