import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ItemNewsComponent} from "./item-news/item-news.component";
import {ListNewsComponent} from "./list-news/list-news.component";


const routers: Routes = [
  {path: '', component: ListNewsComponent},
  {path:'news/:linkName',component:ItemNewsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents=[AppComponent,ItemNewsComponent];
