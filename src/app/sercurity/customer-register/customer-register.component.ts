import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customer:any;
  registerCustomerForm!:FormGroup;

  @ViewChild('uploadFile',{static: true})
  public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture = '';
  url= ""
  id: any;
  title = 'module6FE';

  constructor(private loginService: LoginService, private router: Router,private storage: AngularFireStorage) { }

  fb: any;
  UploadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    if (this.selectedImage != null){
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath)
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
              this.arrayPicture = url
              this.url = this.arrayPicture;
              setTimeout(()=>this.url,2000)
              // localStorage.setItem("URL", this.arrayPicture)
            }
          )
        ))
      ).subscribe()
    }



  }





  ngOnInit(): void {
    this.registerCustomerForm = new FormGroup({
    name: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", [Validators.required]),
    avatar: new FormControl(""),
    address: new FormControl("", Validators.required),
    isActive: new FormControl(true),
    isAccept:  new FormControl(false),
    appUser: new FormGroup({
      username: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required]),
      roles: new FormArray([new FormGroup({
        id: new FormControl("1")
      })])
    })
  });
  }




  registerCustomer() {
    this.UploadFileImg();
    this.customer = {
      name: this.registerCustomerForm.value.name,
      avatar: this.url,
      phoneNumber: this.registerCustomerForm.value.phoneNumber,
      address:  this.registerCustomerForm.value.address,
      appUser: {
        username: this.registerCustomerForm.value.appUser?.username,
        password: this.registerCustomerForm.value.appUser?.password,
        roles:[{
          id: 1
        }]
      },
      isAccept: false,
      isActive: true
    };
    console.log(this.customer);
    console.log(this.url);
    if (this.registerCustomerForm.valid) {
      this.loginService.registerCustomer(this.customer).subscribe((data:any) => {
        alert("chung toi dang xac nhan")
        // console.log("data-username" + data);
        if (data) {
            console.log("data");
            console.log(data);
            alert("chung toi dang xac nhan");
           this.router.navigate(["/register-customer"]);
        } else {
          alert("email da dc sd");
          this.router.navigate(["/register-customer"]);
        }
      })

    } else {
      alert("Please checkout form!");
      this.router.navigate(["/register-customer"]);
    }

  }




}
