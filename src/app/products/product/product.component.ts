import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from './product.service';
import {Product} from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {  
 
  constructor(private productService:ProductService, private router:Router) { }
  public searchText:any;
  public productArray:Product[] = [];

  addProductToCart(productItem:any) {
    this.productService.productAdded.push(productItem);
    alert("Item added to cart!");
  }


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.productArray = data;
    });
  }

  listCartItems(){   
   this.router.navigate(['/shopping-cart'])
  }

}
