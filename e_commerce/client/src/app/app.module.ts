import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCreationComponent } from './post.creation/post.creation.component';
import { SeePostComponent } from './see-post/see-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import {routes} from './router.config';
import { PostDashboardComponent } from './post.dashboard/post.dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    PostCreationComponent,
    SeePostComponent,
    PostDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
