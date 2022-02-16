import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddUserComponent } from './screens/add-user/add-user.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProjectAddComponent } from './screens/project-add/project-add.component';
import { ProjectListComponent } from './screens/project-list/project-list.component';
import { UserListComponent } from './screens/user-list/user-list.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/add',
    component: AddUserComponent
  },
  {
    path: 'du-an',
    component: ProjectListComponent,
  },
  {
    path: 'du-an/them-moi',
    component: ProjectAddComponent
  },
  {
    path: 'admin/tai-khoan',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
