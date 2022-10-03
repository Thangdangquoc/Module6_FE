import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {
  merchant:any;
  registerMerchantForm!:FormGroup;

  @ViewChild('uploadFileMerchant',{static: true})
  public avatarDom: ElementRef | undefined;
  @ViewChild('uploadFileMerchantBanner',{static: true})
  public imageBanner: ElementRef | undefined;
  selectedImage: any = null;
  selectedImageBanner: any = null;
  arrayPicture = '';
  arrayPictureBanner = '';
  url= "";
  urlBanner="";
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

  UploadFileImgBanner() {
    this.selectedImageBanner = this.imageBanner?.nativeElement.files[0];
    if (this.selectedImageBanner != null){
      const filePath = this.selectedImageBanner.name;
      const fileRef = this.storage.ref(filePath)
      this.storage.upload(filePath,this.selectedImageBanner).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
              this.arrayPictureBanner = url
              this.urlBanner = this.arrayPictureBanner;
              setTimeout(()=>this.url,2000)
              // localStorage.setItem("URL", this.arrayPicture)
            }
          )
        ))
      ).subscribe()
    }



  }

  ngOnInit(): void {
    this.registerMerchantForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", [Validators.required]),
      avatar: new FormControl(""),
      address: new FormControl("", Validators.required),
      isActive: new FormControl(true),
      isAccept:  new FormControl(false),
      imageBanner: new FormControl(""),
      appUser: new FormGroup({
        username: new FormControl("", [Validators.required,Validators.email]),
        password: new FormControl("", [Validators.required]),
        roles: new FormArray([new FormGroup({
          id: new FormControl("3")
        })])
      })
    });
  }

  registerMerchant() {
    this.UploadFileImg();
    this.UploadFileImgBanner();
    this.merchant = {
      name: this.registerMerchantForm.value.name,
      avatar: this.url,
      phoneNumber: this.registerMerchantForm.value.phoneNumber,
      address: this.registerMerchantForm.value.address,
      imageBanner:this.urlBanner,
      appUser: {

      username: this.registerMerchantForm.value.appUser?.username,
        password: this.registerMerchantForm.value.appUser?.password,
        roles: [
        {
          id: 3
        }
      ]
    },
      isAccept: true,
      isActive: true
    };
    console.log(this.merchant);
    console.log(this.urlBanner);
    if (this.registerMerchantForm.valid) {
      this.loginService.registerMerchant(this.merchant).subscribe((data:any) => {
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
