import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private allproduct =[
    {"id":1, "name":"A", "image":"ProductImg.png","price":99},
    {"id":2, "name":"B", "image":"ProductImg.png","price":99},
    {"id":3, "name":"C", "image":"ProductImg.png","price":99},
    {"id":4, "name":"D", "image":"ProductImg.png","price":99},
    {"id":4, "name":"F", "image":"ProductImg.png","price":99},
  ];

  private cartproduct = [this.allproduct[1],this.allproduct[2]];

  getProduct(){
    return this.allproduct;
  }

  getCartProduct(){
     return this.cartproduct;
  }

  addtocart(i)
  {
      console.log(this.allproduct[i]);
      this.cartproduct.push(this.allproduct[i]);
  }

  removefromcart(i)
  {
    console.log(this.cartproduct[i]);
    this.cartproduct.splice(i,1);
  }

}
