import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ListNewsModule} from "./list-news/list-news.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {AppRoutingModule, routingComponents} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListNewsModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
