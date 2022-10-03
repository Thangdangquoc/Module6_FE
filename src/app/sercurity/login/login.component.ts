import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../model/user-token";
import {AppUser} from "../../model/app-user";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userToken?:UserToken;
  currentId?: number;
  user?: AppUser;
  formLogin!: FormGroup;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  login() {
    this.user = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,

    };
    console.log(this.user);
    this.loginService.login(this.user).subscribe((data:UserToken) =>{
      this.userToken = data;
      console.log(this.userToken);
      if (this.userToken!=null){
        this.currentId = data.id;
        console.log(this.currentId);
        // @ts-ignore
        localStorage.setItem("currentId",this.currentId);

        if (this.userToken.roles[0].name == "ROLE_CUSTOMER" ){
          this.router.navigate(["/register-customer"]);
          console.log("ROLE_CUSTOMER")
        }else if (this.userToken.roles[0].name == "ROLE_ADMIN"){
          this.router.navigate(["/register-customer"]);
          console.log("ROLE_ADMIN")
        }else if (this.userToken.roles[0].name == "ROLE_MERCHANT"){
          this.router.navigate(["/register-customer"]);
          console.log("ROLE_MERCHANT")
        }
      }
    })
  }
  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
