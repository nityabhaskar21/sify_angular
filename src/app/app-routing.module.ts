import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BuyproductsComponent } from './buyproducts/buyproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewproductbymerchantComponent } from './viewproductbymerchant/viewproductbymerchant.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MyproductlistingComponent } from './myproductlisting/myproductlisting.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductyGuard } from './producty.guard';
import { StartupregisterComponent } from './startupregister/startupregister.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [ProductyGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'startupregister', component: StartupregisterComponent },
  {
    path: 'viewprofile',
    component: ViewprofileComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'addprofile',
    component: AddprofileComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'viewusers',
    component: ViewallusersComponent,
    canActivate: [ProductyGuard]
  },
  { path: 'logout', component: LogoutComponent, canActivate: [ProductyGuard] },
  {
    path: 'addproduct',
    component: AddproductComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'buyproducts',
    component: BuyproductsComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'viewproducts/:category',
    component: ViewproductsComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'viewprodmerchant/:mid',
    component: ViewproductbymerchantComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'showmyorders/:bid',
    component: MyordersComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'orderdetails/:oid',
    component: OrderdetailsComponent,
    canActivate: [ProductyGuard]
  },
  {
    path: 'mylisting/:mid',
    component: MyproductlistingComponent,
    canActivate: [ProductyGuard]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
