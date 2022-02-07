import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { StarComponent } from './components/star/star.component';
import { AgePipe } from './pipes/age.pipe';
import { NumberArrayPipe } from './pipes/number-array.pipe';
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    AgePipe,
    NumberArrayPipe,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
