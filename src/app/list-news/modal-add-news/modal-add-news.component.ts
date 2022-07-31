import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NewsService}from "../../news.service"



@Component({
  selector: 'app-modal-add-news',
  templateUrl: './modal-add-news.component.html',
  styleUrls: ['./modal-add-news.component.scss']
})
export class ModalAddNewsComponent implements OnInit {
  takeNewsImg:string|ArrayBuffer="";
  constructor(public  newsService:NewsService) {

  }

  ngOnInit(): void {
  }

  public infoForm: FormGroup = new FormGroup({
    nameNews: new FormControl('',Validators.required),
    imgNews: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required),
  });

  onSubmit() {
     const newsJson = {
       newsNameJson: this.infoForm.get('nameNews')?.value,
       newsTextJson: this.infoForm.get('text')?.value,
       newsDateJson: new Date().toISOString(),
       newsImgJson: this.takeNewsImg
     }
      localStorage.setItem(`news${localStorage.length+1}`,JSON.stringify(newsJson));
     this.newsService.isOpen=false;
  }

  exit() {
    this.newsService.isOpen=false;
  }


  uploadImage(event:any) {
    const reader:FileReader = new FileReader();
    let res:string|ArrayBuffer;
    reader.addEventListener("load", function () {
      if (this.result && localStorage) {
        res = this.result;
      } else {
        alert("Браузер не поддерживает localStorage");
      }
    });
    reader.readAsDataURL(event.target.files[0]);
    setTimeout(()=>this.takeNewsImg=res,100)
  }
}
