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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewprofile', component: ViewprofileComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'viewusers', component: ViewallusersComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'buyproducts', component: BuyproductsComponent },
  { path: 'viewproducts/:category', component: ViewproductsComponent },
  { path: 'viewprodmerchant/:mid', component: ViewproductbymerchantComponent },
  { path: 'showmyorders/:bid', component: MyordersComponent },
  { path: 'mylisting/:mid', component: MyproductlistingComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
