import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { LoginComponent } from './sercurity/login/login.component';
import { CustomerRegisterComponent } from './sercurity/customer-register/customer-register.component';
import { MerchantRegisterComponent } from './sercurity/merchant-register/merchant-register.component';
import { HomeComponent } from './showhome/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    CustomerRegisterComponent,
    MerchantRegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
