import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
