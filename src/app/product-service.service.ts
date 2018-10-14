import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private allproduct =[
    {"id":1, "name":"A", "image":"../assets/productImg.png","price":99},
    {"id":2, "name":"B", "image":"../assets/productImg.png","price":99},
    {"id":3, "name":"C", "image":"../assets/productImg.png","price":99},
    {"id":4, "name":"D", "image":"../assets/productImg.png","price":99},
    {"id":4, "name":"F", "image":"../assets/productImg.png","price":99},
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
