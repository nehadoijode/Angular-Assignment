import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ProductService } from './products/product/product.service';
import {FilterPipe} from './products/product/productfilter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './products/product/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FilterPipe,
    ShoppingCartComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    IconsModule,
    NgbModule, 
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
