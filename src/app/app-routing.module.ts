import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ShoppingCartComponent } from './products/product/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
