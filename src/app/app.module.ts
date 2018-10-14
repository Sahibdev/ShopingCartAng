import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductServiceService } from './product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
