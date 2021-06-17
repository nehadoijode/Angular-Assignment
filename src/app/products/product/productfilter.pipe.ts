
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} products
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(products: any[], searchText: string): any[] {
    
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toString().toLocaleLowerCase();
      return products.filter(p => {
       return JSON.stringify(p).toString().toLocaleLowerCase().includes(searchText);       
    })
}
}