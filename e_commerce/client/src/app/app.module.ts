import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostProductComponent } from './post-product/post-product.component';
import { OurProductDetailComponent } from './our-product-detail/our-product-detail.component';
import { AllProductDetailsComponent } from './all-product-details/all-product-details.component';
import {AppRoutes} from './routers';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    PostProductComponent,
    OurProductDetailComponent,
    AllProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
