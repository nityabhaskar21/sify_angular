import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BuyproductsComponent } from './buyproducts/buyproducts.component';
import { ViewproductbycatComponent } from './viewproductbycat/viewproductbycat.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewproductbymerchantComponent } from './viewproductbymerchant/viewproductbymerchant.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MyproductlistingComponent } from './myproductlisting/myproductlisting.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { StartupregisterComponent } from './startupregister/startupregister.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, AddprofileComponent, ViewprofileComponent, LogoutComponent, ViewallusersComponent, HomeComponent, PagenotfoundComponent, AddproductComponent, BuyproductsComponent, ViewproductbycatComponent, ViewproductsComponent, ViewproductbymerchantComponent, MyordersComponent, MyproductlistingComponent, OrderdetailsComponent, StartupregisterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
