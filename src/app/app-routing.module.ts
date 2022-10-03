import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./sercurity/login/login.component";
import {CustomerRegisterComponent} from "./sercurity/customer-register/customer-register.component";
import {MerchantRegisterComponent} from "./sercurity/merchant-register/merchant-register.component";

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'register-customer',
    component: CustomerRegisterComponent,
  },
  {
    path: 'register-seller',
    component: MerchantRegisterComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
