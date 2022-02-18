import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ProjectListComponent } from './screens/project-list/project-list.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { ProjectAddComponent } from './screens/project-add/project-add.component';
import { AddUserComponent } from './screens/add-user/add-user.component';
import { UserListComponent } from './screens/user-list/user-list.component';
import { ProjectEditComponent } from './screens/project-edit/project-edit.component';

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
    DashboardComponent,
    ProjectListComponent,
    ProjectAddComponent,
    AddUserComponent,
    UserListComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
