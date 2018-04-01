import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersPostComponent } from './users-post/users-post.component';

const appRoutes: Routes = [  
  {path:"", redirectTo:"/profile",pathMatch:'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'profile',      component: UsersPostComponent }
  
];

// {
//   path: 'heroes',
//   component: HeroListComponent,
//   data: { title: 'Heroes List' }
// },
// { path: '',
//   redirectTo: '/heroes',
//   pathMatch: 'full'
// },
// { path: '**', component: PageNotFoundComponent }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignUpComponent,
    UsersPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
