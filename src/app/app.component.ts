import {Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('uploadFile',{static: true})
  public avatarDom: ElementRef | undefined;
  selectedImage: any = null;
  arrayPicture = '';
  idUpdate!: any;
  url= ""
  idUpdateClass:any;
  id: any;
  title = 'module6FE';


  fb: any;
  constructor( private storage: AngularFireStorage) {}
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
}
