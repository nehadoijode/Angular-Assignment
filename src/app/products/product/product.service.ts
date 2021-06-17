import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productAdded:any[]=[];
  constructor(private http: HttpClient) {     
  }

  getAllProducts() {
    return this.http.get<{
    fruitName:string;
    fruitDescription:string;
    amount: any;
    image_path:string;
    }[]>('/assets/product.json');
  }
}
