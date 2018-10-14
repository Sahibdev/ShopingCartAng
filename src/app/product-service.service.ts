import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  //datasource for functionality
  private allproduct =[
    {"id":1, "name":"A", "image":"assets/productImg.png","price":99},
    {"id":2, "name":"B", "image":"assets/productImg.png","price":99},
    {"id":3, "name":"C", "image":"assets/productImg.png","price":99},
    {"id":4, "name":"D", "image":"assets/productImg.png","price":99},
    {"id":4, "name":"F", "image":"assets/productImg.png","price":99},
  ];

  //two products added bt default to cart
  private cartproduct = [this.allproduct[1],this.allproduct[2]];

  //get all products
  getProduct(){
    return this.allproduct;
  }

  //get products in cart
  getCartProduct(){
     return this.cartproduct;
  }

  //add product to cart with index i
  addtocart(i)
  {
      console.log(this.allproduct[i]);
      this.cartproduct.push(this.allproduct[i]);
  }

  //remove product from cart with index i
  removefromcart(i)
  {
    console.log(this.cartproduct[i]);
    this.cartproduct.splice(i,1);
  }

}
