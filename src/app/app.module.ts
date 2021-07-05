import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path: 'AboutUs', component: AboutUsComponent},
        {path: 'SignIn', component: SignInComponent},
        {path: 'Login', component: LoginComponent},
        {path: ':name', component: UsersComponent},
        //{path: '', redirectTo: ':name', pathMatch: 'full'},
        {path: '**', component: SignInComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
