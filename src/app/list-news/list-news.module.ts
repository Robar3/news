import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListNewsComponent} from "./list-news.component";
import { FormNewsComponent } from './form-news/form-news.component';
import {FormNewsModule} from "./form-news/form-news.module";
import { ModalAddNewsComponent } from './modal-add-news/modal-add-news.component';
import {ModalAddNewsModule} from "./modal-add-news/modal-add-news.module";



@NgModule({
  declarations: [
    ListNewsComponent
  ],
  exports:[
    ListNewsComponent
  ],
  imports: [
    CommonModule,
    FormNewsModule,
    ModalAddNewsModule
  ]
})
export class ListNewsModule { }
