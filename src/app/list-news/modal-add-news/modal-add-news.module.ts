import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalAddNewsComponent} from "./modal-add-news.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ModalAddNewsComponent],
  exports:[ModalAddNewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ModalAddNewsModule { }
