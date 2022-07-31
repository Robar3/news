import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormNewsComponent} from "./form-news.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";



@NgModule({
  declarations: [FormNewsComponent],
  exports:[
    FormNewsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ]
})
export class FormNewsModule { }
