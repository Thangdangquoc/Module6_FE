import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppUser} from "../model/app-user";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {UserToken} from "../model/user-token";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  login(user: AppUser): Observable<UserToken>{
    return this.http.post<UserToken>("http://localhost:8080/api/login-register/login",user);
  }


  registerCustomer(customer: any): Observable<any>{
    // console.log("customer",customer);
    return this.http.post<any>("http://localhost:8080/api/login-register/register-customer",customer);
  }
  registerMerchant(merchant: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/login-register/register-merchant",merchant);
  }

}
