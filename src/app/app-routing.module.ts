import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'admin/:id', component: AdminComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
